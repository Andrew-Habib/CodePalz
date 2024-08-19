import Login from './Login'
import Signup from './Signup'

const UserForms = () => {
    
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
            <p className="terms-msg">By clicking Log In or Create Account, you agree to our terms and conditions.</p>
        </div>
    )
    
}

export default UserForms