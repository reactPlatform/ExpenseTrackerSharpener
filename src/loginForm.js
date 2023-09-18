import React from 'react'
import {Link} from 'react-router-dom';
import {database} from './firebaseConfig';
//import {signInWithEmailAndPassword} from 'firebase/auth';
import { useSelector,useDispatch} from 'react-redux';
import { authActions } from './redux/redux';
//import { useNavigate } from 'react-router-dom';
const Loginfiller = () => {
    const dispatch = useDispatch();
    
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value; 
        const password = e.target.password.value;
        dispatch(authActions.handleLogin(database,email,password));
    }
  return (
    <div>
    <div className='container'>
        <div className='signContainer'>SignIn</div>
        <form className='formContainer' onSubmit={e => handleLogin(e)}>
            <input className='inputContainer' type='email' name='email' placeholder='Enter Email'/><br/>
            <input className='inputContainer' type='password' name='password' placeholder='Enter Password'/><br/>
            <button className='buttonContainer'>Login</button>
        </form>
    </div>
    <div className='loginContainer'>
            Don't have an account? <Link to='/signup'><span className='loginLink'>Register</span></Link>
        </div>
        <div>
            <Link to='/forgotPassword'>Forgot Password?</Link>
        </div>
    </div>
  )
}

export default Loginfiller