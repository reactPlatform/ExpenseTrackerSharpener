import React from 'react'
import './App.css';
import {database} from './firebaseConfig';
import {signOut} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
const Home = () => {
    const history = useNavigate();
    const handleSignOut = () => {
        signOut(database).then(val => {
            history('/');
        })
    }
  return (
    <div>
    <div>
    <div className='homeContainer'>Welcome to Expense Tracker</div>
    <div className='profileContainer'>Your Profile is incomplete. <Link to='/updateProfile'>Complete now</Link></div>
    </div>
    <div><button className='homeButton' onClick={handleSignOut}>Logout</button></div><hr/>
    </div>
  )
}

export default Home