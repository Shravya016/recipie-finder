import React, { useState } from "react";
import './login.css'
function Login() {
    const [inputvalue, setinputvalue] = useState('');
    const [passwordinput, setpassword] = useState('');

    const handleevent = (event) => {
        setinputvalue(event.target.value);
    };

    const handlepassword = (event) => {
        setpassword(event.target.value);
    };

    return (
        <div className="login-box">
        <div ><p className="login">Welcome back</p></div>
        <div><p className="L">Username</p></div>
        <div><input type="text" value={inputvalue} onChange={handleevent} /></div>
        <div><p className="L">Password</p>
        <input type="password" value={passwordinput} onChange={handlepassword} /></div>
        <div><button >Login</button></div>
        </div>
    );
}

export default Login;