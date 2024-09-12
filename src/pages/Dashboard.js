import Nav from '../components/Nav'
import PalCard from '../components/PalCard'

// Find Collaborators by filters and Match, preliminary chat feature

const Dashboard = () => {
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
                    <PalCard />
                </div>
            </div>
        </div>
    )
}

export default Dashboard