
import {useState} from "react";
import {useNavigate} from 'react-router-dom'
import './login.css';


function Login (){

    const [loginUser,setloginUser] = useState({
        username: "",
        password: "",
    })
    

    const loginUserInput = (e) =>{
        const value = e.target.value
        const field = e.target.name
        setloginUser({
            ...loginUser,
            [field]: value
        })
    }

const navigate = useNavigate()

    const handleLogin = (e) =>{
        e.preventDefault()
        localStorage.setItem('access_token', loginUser.username)
        navigate("/")
}
   
    return (
        <div class="login">
        <h1>Login</h1>
        <form method="post"  onSubmit={(e)=>handleLogin(e)}>
            <input type="text" name="username" placeholder="Username"   onChange={loginUserInput} required="required" />
            <input type="password" name="password" placeholder="Password"   onChange={loginUserInput} required="required" />
            <button type="submit" class="btn btn-primary btn-block btn-large">Let me in.</button>
        </form>
    </div>
    )
}

export default Login;