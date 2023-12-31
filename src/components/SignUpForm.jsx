import { useState } from 'react'

export default function SignUpForm({ setToken }) {
    // State variables (for our form inputs)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)

    // Submit function
    async function handleSubmit(event) {
        event.preventDefault()

        try {
            // Form validation
            if (username.length < 8) {
                console.log("too short")
                throw new Error("Please choose a username with at least 8 characters")
            } else if (password.length < 8) {
                console.log("needs more characters")
                throw new Error("Please choose a password with at least 8 characters")
            }

            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username: {username},
                    password: {password},
                 }),
            });
            const result = await response.json();
            setToken(result.token);
            console.log(result);
        } catch (error) {
            setError(error.message)
        }
    }

    // Return
    return (
        <>
            <h2>Sign Up</h2>
            {error && <p>{error}</p>}

            <form onSubmit={handleSubmit}>
                <label> Username:
                    <input
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value)
                        }}
                    />
                </label>

                <label> Password:
                    <input
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                    />
                </label>

                <button>Submit</button>
            </form>
        </>
    );
}