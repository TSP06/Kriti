import { useState } from "react"
import "./Login.css";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
    const [hostel, setHostel] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {login, isLoading, error} = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(hostel, username, password)
    }

    return(
        <form className="login" onSubmit={handleSubmit}>
            <h3>Log in</h3>

            <label>Hostel:</label>
            <input
            type="hostel"
            onChange={(e) => setHostel(e.target.value)}
            value = {hostel}
            />

            <label>Username:</label>
            <input
            type="username"
            onChange={(e) => setUsername(e.target.value)}
            value = {username}
            />

            <label>Password:</label>
            <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value = {password}
            />

            <button disabled={isLoading}>Login</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default Login