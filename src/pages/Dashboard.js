import Nav from '../components/Nav'
import PalCard from '../components/PalCard'

// Find Collaborators by filters and Match, preliminary chat feature

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Nav />
            {/* <Chat /> */}
            <div className="match-container">
                <div className="card-container">

                    <PalCard />
                </div>
            </div>
        </div>
    )
}

export default Dashboard