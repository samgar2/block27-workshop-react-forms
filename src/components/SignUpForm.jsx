import { useState } from 'react'

export default function SignUpForm() {
    // State variables (for our form inputs)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)

    // Submit function
    async function handleSubmit(event) {
        event.preventDefault()
        console.log("Hi")
    }

    // Return
    return (
        <>
            <h2>Sign Up</h2>
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