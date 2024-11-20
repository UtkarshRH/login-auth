import React from "react";
import AuthForm from "../components/authForm";

const Register = () => {
    const handleRegister = async(formData) => {
        try {
            const URL = await fetch("http://localhost:2000/api/v1/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": 'application/json',
                },
                body: JSON.stringify(formData),
            })
            const data = await URL.json();
            if (URL.ok) {
                alert("Register Success");
            }else{
                alert(data.message);
            }
        } catch (error) {
            console.error("Register error : ", error);
        }
    };

    return(
        <AuthForm title="Register" onSubmit={handleRegister}/>
    )
};


export default Register;