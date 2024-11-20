import AuthForm from "../components/authForm";

const Login = () =>{
    const handleLogin = async(formData) =>{
        try {
            const URL = await fetch("http://localhost:2000/api/v1/auth/login",{
                method :"POST",
                headers:{
                    "Content-Type" : "application/json",
                },
                body : JSON.stringify(formData)
            });
            const data = await URL.json();
            if (URL.ok) {
                alert("login Succesfully")
                localStorage.setItem("token", data.token);
            }else{
                alert(data.message)
            }
        } catch (error) {
            console.error("Login error",error);
        }
    };
    return(
        <AuthForm title="login" onSubmit={handleLogin}/>
    )
};


export default Login;