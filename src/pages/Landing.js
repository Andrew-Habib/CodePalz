import Nav from '../components/Nav'
import UserForms from '../components/UserForms'

const Landing = () => {

    const authToken = false

    const handle_signup_clicked = () => {
        console.log("clicked")
    }

    return (
        <div className="overlay">
            <Nav authToken={authToken}/>
            <div className="home">
                <h1 className="landing-ad-msg">Find a Code Pal Now</h1>
                {/* <button className="signup-button" onClick={handle_signup_clicked}>
                    { authToken ? "SIGN OUT" : "CREATE ACCOUNT"}
                </button> */}
                <UserForms />
            </div>
        </div>
    )
}

export default Landing