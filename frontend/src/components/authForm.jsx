import React, { useState } from "react";

const authForm = ({ title, onSubmit }) => {
    const [formData, setFormData] = useState({ name: " ", email: " ", password: " " })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                {title === "Register" && (
                    <div>
                        <label>Name: </label>
                        <input type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                )}
                <div>
                    <label>Email: </label>
                    <input type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text"
                        name="name"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        required
                    />
                </div>
                <button type="submit">{title}</button>
            </form>
        </>
    )
}