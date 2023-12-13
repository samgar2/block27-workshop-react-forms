import { useState } from 'react'

export default function Authenticate({ token }) {
    // State variables
    const [successMessage, setSuccessMessage] = useState(null);
    const [error, setError] = useState(null)

    // Click function
    async function handleClick() {
        console.log("Clicked")
        try {
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }
            );
            const result = await response.json();
            setSuccessMessage(result.message);
            console.log(result);

        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <>
            <h2>Authentication</h2>
            {successMessage && <p>{successMessage}</p>}
            {error && <p>{error}</p>}
            <button onClick={() => { handleClick() }} > Authenticate Token</button>
        </>
    );
}