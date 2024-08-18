import { useState } from 'react'

const Login = () => {
    
    const [ username, setUsername ] = useState(null)
    const [ password, setPassword ] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
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
                <input className="login-button" type="submit"/>
            </form>
        </div>
    )

}

export default Login