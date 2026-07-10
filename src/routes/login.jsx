import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const raw = {
                email: email,
                password: password,

            };

            const response = await fetch("https://mywoods-api.onrender.com/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(raw),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const result = await response.json();

            localStorage.setItem("mywoods_token", result?.token);
            navigate("/");
            console.log(result);

        } catch (error) {
            console.error("Error:", error);
        }
    }

    return (
        <main className="login-page">
            <div className="login-panel">
                <section className="login-card">
                    <div className="login-card-head">
                        <h1>Welcome back</h1>
                        <p>Sign in with your email and password to continue.</p>
                    </div>

                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                    />

                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                    />

                    <button className="btn btn-primary" onClick={handleLogin}>
                        Login
                    </button>
                </section>

                <section className="login-story">
                    <div className="login-story-card">
                        <h2>Your access gateway</h2>
                        <p>
                            After logout, the sign-in panel appears instantly and takes up half of the screen for a focused login experience.
                        </p>
                        <ul>
                            <li>Secure timber inventory access</li>
                            <li>Quick login for CMS and dashboard</li>
                            <li>Designed for desktop and mobile</li>
                        </ul>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Login;