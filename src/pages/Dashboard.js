import Nav from '../components/Nav'
import PalCard from '../components/PalCard'
import React, { useState } from 'react'

// Find Collaborators by filters and Match, preliminary chat feature

const Dashboard = () => {

    const [iconClicked, setIconClicked] = useState(null);

    return (
        <div className="dashboard">
            <Nav />
            <div className="main-content">
                <div className="notification-panel">
                <h2 class="text-lg font-semibold mb-2">Notifications</h2>
                <ul>
                    <li class="mb-2">Notification 1</li>
                    <li class="mb-2">Notification 2</li>
                    <li class="mb-2">Notification 3</li>
                </ul>
                </div>
                
                <div className="card-container">
                    <div>
                        {iconClicked === 'check' ? 'Check icon clicked' : 'X icon clicked'}
                    </div>
                    <PalCard onIconClick={setIconClicked}/>
                </div>
                
            </div>
        </div>
    )
}

export default Dashboard