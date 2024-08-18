import Login from './Login'
import Signup from './Signup'

const UserForms = () => {

    const authToken = false

    const handle_signup_clicked = () => {
        console.log("clicked")
    }

    return (
        <div>
            <div className="user-login-signup">
                <div className="login-div">
                    <Login />
                </div>
                <div className="signup-div">
                    <Signup />
                </div>
            </div>
            <p className="terms-msg">By clicking Log In or Sign Up, you agree to our terms and conditions.</p>
        </div>
    )
    
}

export default UserForms