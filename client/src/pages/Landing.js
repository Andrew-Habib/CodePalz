import Nav from '../components/Nav'
import UserForms from '../components/UserForms'

const Landing = () => {
    return (
        <div className="overlay">
            <Nav />
            <div className="home">
                <h1 className="landing-ad-msg">Find a Code Pal Now</h1>
                <UserForms />
            </div>
        </div>
    )
}

export default Landing