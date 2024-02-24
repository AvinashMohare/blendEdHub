import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore"; // Import Firestore methods
import { db } from "../firebase"; // Import your Firestore instance
import "../styles/login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const logInWithEmailAndPassword = async (email, password) => {
        try {
            const usersRef = collection(db, "users");
            const q = query(
                usersRef,
                where("email", "==", email),
                where("password", "==", password)
            );
            const querySnapshot = await getDocs(q);

            if (querySnapshot.empty) {
                console.log("Invalid email or password");
                return;
            }

            // Successfully logged in - handle your logic here (redirect, set state, etc.)
            console.log("Login successful!");
            // navigate("/dashboard"); // Redirect to dashboard upon successful login
        } catch (error) {
            console.error("Error logging in:", error);
        }
    };

    return (
        <div className="login">
            <div className="login__container">
                <input
                    type="text"
                    className="login__textBox"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail Address"
                />
                <input
                    type="password"
                    className="login__textBox"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <button
                    className="login__btn"
                    onClick={() => logInWithEmailAndPassword(email, password)}
                >
                    Login
                </button>
                {/* Other login options */}
                {/* ... */}
                <div>
                    <Link to="/reset">Forgot Password</Link>
                </div>
                <div>
                    Don't have an account? <Link to="/register">Register</Link>{" "}
                    now.
                </div>
            </div>
        </div>
    );
}

export default Login;
