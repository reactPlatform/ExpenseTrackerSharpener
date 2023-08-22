import React, { useState } from 'react';
import {database} from './firebaseConfig';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
import './App.css';
const RegisterForm = () => {
    const history = useNavigate();
    const [message,setMessage] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.cpassword.value;
        if(password == confirmPassword){
            setMessage("Passwords Matched");
            createUserWithEmailAndPassword(database,email,password).then(data => {
                console.log(data,'auth');
                history('/home');
            }).catch(err => {
                alert(err.message);
            })
        }
        else{
            setMessage("Passwords not matched");
        }
        
    }
  return (
    <div>
    <div className='container'>
        <div className='signContainer'>SignUp</div>
        <form className='formContainer' onSubmit={e => handleSubmit(e)}>
            <label for='email' className='inputLabel'>Email Address</label>
            <input className='inputContainer' type='email' name='email' placeholder='Enter Email' required/><br/>
            <label for='password' className='inputLabel1'>Password</label>
            <input className='inputContainer' type='password' name='password' placeholder='Enter Password' required/><br/>
            <label for='cpassword' className='inputLabel2'>Confirm Password</label>
            <input className='inputContainer' type='password' name='cpassword' placeholder='Enter Password' required/><br/>
            <p>{message}</p>
            <button className='buttonContainer'>Register</button>
        </form>
    </div>
    <div className='loginContainer'>
            Have an account? <Link to='/login'><span className='loginLink'>Login</span></Link>
        </div>
    </div>
  )
}

export default RegisterForm