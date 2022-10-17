 


 import React from "react";

//import { login } from "../utils/network-data";
import useInput from "../components/UseInput";

function LoginInput({login}) {
    const [email, onEmailChange] = useInput('');
    const [password, onPasswordChange] = useInput('');
    const onSubmitHandler = e => {
        e.preventDefault();
        login({email, password});
    }

    
    
   
    return (
        <form className="input-login" onSubmit={onSubmitHandler}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={onEmailChange} />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={onPasswordChange} />
            <button>Login</button>
        </form>
    );
}


export default LoginInput;



// async function handlerLogin(users) {
//     const {error, data} = await login(users);
//     if(!error){
//       navigate("/")  //langsung mengarahkan ke halaman utama setelah login berhasil
//     }
// }
