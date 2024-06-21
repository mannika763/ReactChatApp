import React from 'react';
import "./Login.css";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";




function Login() {


    const handleLogin =e=>{
        e.preventDefault();
       
    }

    const handleRegister =async (e) => {
        e.preventDefault();
        const form = new FormData(e.target);

        const {Username, email, password} = Object.fromEntries(form)

        console.log(Username,email, password)

        try{
            const auth = getAuth();
            const res = await createUserWithEmailAndPassword(auth,email,password)
        }catch(err){
            console.log(err)
        }
    };

  return (
    <div className='login'>
      <div className="signin-item">
        <h2>Welcome Back,</h2>
        <form onSubmit={handleLogin}>
            <input type='text' placeholder='Email' name='email'/>
            <input type='password' placeholder='Password' name='password'/>
       <button>Sign In</button>
        </form>
      </div>
      <div className="sperator"></div>
<div className="login-item">
<h2>Create an Account</h2>
<form onSubmit={handleRegister}>
            <input type='text' placeholder='Username' name='Username'/>
            <input type='text' placeholder='Email' name='email'/>
            <input type='password' placeholder='Password' name='password'/>
       <button>Login</button>
        </form>
</div>
    </div>
  )
}

export default Login
