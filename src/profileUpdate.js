import React from 'react'
import {Link} from 'react-router-dom';
const ProfileUpdate = () => {
  return (
    <div>
      <div>
    <div className='homeContainer' style={{fontSize:"larger"}}>Winners never quite, Quitters never win.</div>
    <div className='profileContainer' style={{fontSize:"larger",width:"40%"}}>Your Profile is 64% completed. A complete Profile has higher chances of landing a job.<Link to='/updateProfile'>Complete now</Link></div>
    </div><br /><br/>
    <div className='contactContainer'>
      <h2>Contact Details</h2>
      <div className='fullNameContainer'>
      <label for='fullName' className='labelDesign'>Full Name</label>
      <input type='text' name='fullName' className='inputFieldContainer'/>
      </div>
      <div className='profilePhotoContainer'>
        <label for='profilePhoto'className='labelDesign'>Profile Photo URL</label>
        <input type='text' name='profilePhoto' className='inputFieldContainer'/>
      </div>
      <div className='profileButtonContainer'>
      <button className='profileUpdateButton'>Update</button>
      <button className='profileUpdateButton'>Cancel</button>
      </div>
    </div>
    
    </div>
  )
}

export default ProfileUpdate