import { useState } from 'react'

const Signup = () => {
    
    const [ username, setUsername ] = useState(null)
    const [ password, setPassword ] = useState(null)
    const [ confirmPassword, setConfirmPassword ] = useState(null)
    const [ error, setError ] = useState(null)
    
    console.log(username, password, confirmPassword)

    const handleSubmit = (e) => {
        e.preventDefault()
        setError(null)
        try {
            if (password !== confirmPassword) {
                setError('Your Passwords do not match. Please try again.')
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="signup-section">
            <h1 className="signup-title">Sign up</h1>
            <form className="signup-form" onSubmit={handleSubmit}>
                <input
                    type="username"
                    id="username"
                    name="username"
                    placeholder="Username"
                    required={true}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    required={true}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="password-confirm"
                    id="password-confirm"
                    name="password-confirm"
                    placeholder="Confirm Password"
                    required={true}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <input className="signup-button" type="submit" value="Create Account"/>
            </form>
            <p className="signup-error">{error}</p>
        </div>
    )

}

export default Signup