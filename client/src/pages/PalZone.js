import React, { useState } from 'react';
import Nav from '../components/Nav';

const ChatZone = () => {
    const [activeGroup, setActiveGroup] = useState(null);
    const [messages, setMessages] = useState([
        { text: 'Hello there!', sender: 'Coder1' },
        { text: 'Hey! How’s it going?', sender: 'Coder2' }
    ]);
    const [newMessage, setNewMessage] = useState('');

    const groups = ['Group 1', 'Group 2', 'Group 3'];

    const sendMessage = () => {
        if (newMessage.trim() !== '') {
            setMessages([...messages, { text: newMessage, sender: 'You' }]);
            setNewMessage('');
        }
    };

    return (
        <div className="chat-zone">
            <Nav loggedin={true} />
            <div className="groups-panel">
                <h2 className="text-xl font-semibold mb-4 text-purple-400">Groups</h2>
                <ul className="group-list">
                    {groups.map((group, idx) => (
                        <li
                            key={idx}
                            className={`group-item ${activeGroup === group ? 'active' : ''}`}
                            onClick={() => setActiveGroup(group)}
                        >
                            {group}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="chat-panel">
                {activeGroup ? (
                    <div>
                        <h2 className="chat-header">{activeGroup} Chat</h2>
                        <div className="chat-messages">
                            {messages.map((message, idx) => (
                                <div
                                    className={`chat-message ${message.sender === 'You' ? 'self' : ''}`}
                                >
                                    <span className="sender">{message.sender}: </span>
                                    <span>{message.text}</span>
                                </div>
                            ))}
                        </div>
                        <div className="chat-input-area">
                            <input
                                type="text"
                                className="chat-input"
                                placeholder="Type a message..."
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                            />
                            <button className="send-button" onClick={sendMessage}>
                                Send
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="select-group">
                        <h2 className="text-2xl text-slate-400">Select a group to start chatting</h2>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ChatZone;