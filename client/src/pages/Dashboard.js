import Nav from '../components/Nav'
import PalCard from '../components/PalCard'
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import axios from 'axios'

// Find Collaborators by filters and Match, preliminary chat feature

const Dashboard = () => {

    const [iconClicked, setIconClicked] = useState(null);
    const [user, setUser] = useState(null);
    const [cookies, setCookie, removeCookie ] = useCookies(['user'])

    const userId = cookies.UserId
    
    const getUser = async () => {
        try {
            const response = await axios.get('http://localhost:8000/user', {
                params: { userId }
            })
            setUser(response.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getUser()
    }, [user])

    console.log('user', user)

    return (
        <div className="dashboard">
            <Nav loggedin={true}/>
            <div className="main-content">
                <div className="notification-panel">
                <h2 class="text-lg font-semibold mb-2">Notifications</h2>
                <ul>
                    <li class="mb-2">Notification 1</li>
                    <li class="mb-2">Notification 2</li>
                    <li class="mb-2">Notification 3</li>
                </ul>
                </div>
                <div className="general-content">
                    <div className="coder-name-container">
                        <h1 className="coder-name">
                            Hello, {user ? user.coder_name : 'Unknown'}
                        </h1>
                    </div>
                    <div className="card-container">
                        <div>
                            {iconClicked === 'check' ? 'Check icon clicked' : 'X icon clicked'}
                        </div>
                        <PalCard user={user} onIconClick={setIconClicked}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard