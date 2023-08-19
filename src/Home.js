import React from 'react'
import './App.css';
import {database} from './firebaseConfig';
import {signOut} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const history = useNavigate();
    const handleSignOut = () => {
        signOut(database).then(val => {
            history('/');
        })
    }
  return (
    <div>
    <div className='homeContainer'>Home</div>
    <button className='homeButton' onClick={handleSignOut}>Logout</button>
    </div>
  )
}

export default Home