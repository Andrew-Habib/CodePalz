import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
    
    const [ username, setUsername ] = useState(null)
    const [ password, setPassword ] = useState(null)

    let navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post('http://localhost:8000/login', {username, password})

            if (response.status === 201) {
                navigate('/dashboard')
            }

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="login-section">
            <h1 className="login-title">Log in</h1>
            <form className="login-form" onSubmit={handleSubmit}>
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
                <input className="login-button" type="submit" value="Log in"/>
            </form>
        </div>
    )

}

export default Login