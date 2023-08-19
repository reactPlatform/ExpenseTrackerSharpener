import React from 'react';
import {database} from './firebaseConfig';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
import './App.css';
const RegisterForm = () => {
    const history = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUserWithEmailAndPassword(database,email,password).then(data => {
            console.log(data,'user created successfully');
            history('/home');
        }).catch(err => {
            alert(err.code);
        })
    }
  return (
    <div>
    <div className='container'>
        <div className='signContainer'>SignUp</div>
        <form className='formContainer' onSubmit={e => handleSubmit(e)}>
            <input className='inputContainer' type='email' name='email' placeholder='Enter Email'/><br/>
            <input className='inputContainer' type='password' name='password' placeholder='Enter Password'/><br/>
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