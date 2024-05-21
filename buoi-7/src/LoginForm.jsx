import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const inputEmail = (event) => {
        setEmail(event.target.value);
    }
    const inputPassword = (event) => {
        setPassword(event.target.value);
    }
    const handleLogin = (event) => {
        event.preventDefault();
        console.log(email);
        console.log(password);
        if (email === 'aptech@aptech.vn' && password === 'aptech') {
            alert('Login successfully');
        } else {
            alert('Login failed');
            setEmail('');
            setPassword('');
        }
    }
    return (
        <>
            <div className='form-style'>
                <form onSubmit={handleLogin}>
                    <h1>Login</h1>
                    <input type="text" value={email} placeholder='Enter email id / username' onChange={(e) => inputEmail(e)} /><br />
                    <input type="password" value={password} placeholder='Enter password' onChange={(e) => inputPassword(e)} /><br />
                    <button type="submit" className='login'>Login</button>
                </form>
            </div>

        </>
    )
}



export default LoginForm;