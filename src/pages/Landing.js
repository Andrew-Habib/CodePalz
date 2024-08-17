import Nav from '../components/Nav'

const Landing = () => {

    const authToken = false

    const handle_signup_clicked = () => {
        console.log("clicked")
    }

    return (
        <div>
            <Nav />
            <div className="home">
                <h1>Find a Code Pal Now</h1>
                <button className="signup-button" onClick={handle_signup_clicked}>
                    { authToken ? "SIGN OUT" : "CREATE ACCOUNT"}
                </button>
            </div>
        </div>
    )
}

export default Landing