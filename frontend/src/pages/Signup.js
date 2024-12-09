import { useState } from "react"
import "./Login.css";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
    const [hostel, setHostel] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {signup, isLoading, error } = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await signup(hostel, username, password)
    }

    return(
        <form className="signup" onSubmit={handleSubmit}>
            <h3>Sign up</h3>

            <label>hostel:</label>
            <input
            type="hostel"
            onChange={(e) => setHostel(e.target.value)}
            value = {hostel}
            />

            <label>username:</label>
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

            <button disabled={isLoading}>Sign up</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default Signup