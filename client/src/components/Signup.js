import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {
    
    const [ username, setUsername ] = useState(null)
    const [ password, setPassword ] = useState(null)
    const [ confirmPassword, setConfirmPassword ] = useState(null)
    const [ error, setError ] = useState(null)

    let navigate = useNavigate()
    
    console.log(username, password, confirmPassword)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(null)
        try {

            if (password !== confirmPassword) {
                setError('Your Passwords do not match. Please try again.')
                return
            }

            const response = await axios.post('http://localhost:8000/signup', {username, password})

            if (response.status === 201) {
                    navigate('/onboarding')
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
                    type="password"
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