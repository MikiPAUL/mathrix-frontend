import React, { useState } from 'react';
import { FaUser, FaLock } from "react-icons/fa";
import './Login.css';
import {useNavigate} from "react-router-dom"

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigate();
    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:3501/users');
            const users = await response.json();
            const user = users.find(u => u.username === username && u.password === password);
            if (user) {
                alert("LOGIN SUCCESSFUL");
            } else {
                alert('Invalid username or password');
                setUsername('');
                setPassword('');
                return;
            }
        } catch (err) {
            console.error('Error during login:', err);
        }
    }

    return (
        <>
            <div className='login-section'>
                <section className='login-field section'>
                <div class="mb-3">
                    <div className='username-field' style={{flexDirection:"row"}}>
                        <input
                            type="text"
                            id="username form-control"
                            placeholder="ENTER NAME"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            aria-describedby="emailHelp"
                        />
                        <FaUser style={{marginLeft: "1rem", position: "absolute"}} className="icon" />
                    </div>
                    </div>
                    <div class="mb-3">
                    <div className='password-field'>
                        <input
                            type="password"
                            id="password"
                            placeholder="ENTER PASSWORD"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <FaLock style={{marginLeft: "1rem", position: "absolute"}} className="icon" />

                    </div>
                    </div>
                    <button type="submit" class="btn btn-primary buttonl">Submit</button>
                    <div style={{flexDirection:"row",padding:5}}><p>Not having an account? <button style={{all:"unset",color:"#7E30E1"}} onClick={() => navigation('/registration')}>Register</button></p></div>
                </section>
            </div>
        </>
    );
};

export default Login;