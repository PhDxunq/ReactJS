import React from "react";
import { useState } from "react";

const LoginForm = () => {
    const [email,setEmail] = useState("aptech@aptech.vn");
    const [password,setPassword] = useState("aptech");
    const handleSubmit = (event) => {
        event.preventDefault();
        const submitEmail = event.target.name.value;
        const submitPassword = event.target.password.value;
        if(submitEmail === email && submitPassword === password){
            alert("Login sucessful");
            document.getElementById("form").reset();
        }
        else{
            alert("Login failed. Please check your credentials");
        }
    }
    return (
        <div>
            <h1>Login</h1>
            <form id="form"  onSubmit={(event) => handleSubmit(event)}>
                <input style={{ width: "250px", height: "40px", borderRadius: "4px" }} id="name" name="email" type="text" placeholder="Enter email id/username" /> <br />
                <input style={{ width: "250px", height: "40px", marginTop: "15px", borderRadius: "4px" }} id="password" name="password" type="password" placeholder="Enter password" /> <br />
                <button style={{ borderRadius: "4px", background: "blue", color: "white", width: "250px", height: "40px", marginTop: "15px" }} type="submit">LOGIN</button>
            </form>
        </div>
    )
}
export default LoginForm;