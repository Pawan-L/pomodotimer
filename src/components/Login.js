// src/components/Login.js
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import React, {useEffect, useState } from "react";
import { auth } from "../firebase";
import { Navigate } from "react-router-dom";
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [showLogin, setShowLogin] = useState(true);
    const [isLoggedIN, setISLoggedIn]=useState(false);
    useEffect(()=>{
        setISLoggedIn(false)
    },[])
    if(isLoggedIN){
        return <Navigate to="/pomodoro" />
    }
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setISLoggedIn(!isLoggedIN)
        } catch (error) {
            setError(error.message);
        }
    };
    const toggleForm = (e) => {
        e.preventDefault();
        setShowLogin((showLogin) => !showLogin);
    };
    const handleSignUP = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
            setError(error.message);
        }
        toggleForm();
    };

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-bold mb-4">{showLogin ? "Login" : "Sign UP"}</h2>
                <form onSubmit={showLogin?handleLogin:handleSignUP}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-600 font-semibold">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        // required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-600 font-semibold">
                            password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        // required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 mb-2"
                    >
                        {showLogin ? "Login" : "Sign UP"}
                    </button>
                    {error && <p className="text-red-500 mb-4">{error?"email or password is incorrect":"Loggedin"}</p>}
                    <p>
                        {showLogin ? "Don't have an account?" : "Already have an account?"}
                        <button onClick={toggleForm}>
                            {showLogin ? "Sign Up" : "Login"}
                        </button>
                    </p>
                </form>
            </div>
        </div>
    );
}
export default Login;
