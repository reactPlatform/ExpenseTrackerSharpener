import React from 'react'
import {useState,useEffect} from 'react';
import './App.css';
import {updateDetailsInDB, database,getExpenseDetails,deleteDetailsInDB} from './firebaseConfig';
import {signOut} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
import {useGetCurrentUser} from './firebaseConfig';

const Home = () => {
    const history = useNavigate();
    const handleSignOut = () => {
        signOut(database).then(val => {
            history('/');
        })
    }
    const [productName,setproductName] = useState('');
    const [productPrice,setproductPrice] = useState('');
    const [items,setItems] = useState([]);
    const currentUser = useGetCurrentUser();

    const handleExpenseAdder = async() => {
      const item = {
        productId: Math.floor(Math.random() * 1000),
        productName,
        productPrice
      }
      setItems(oldItems => [...oldItems,item]);
      setproductName('');
      setproductPrice('');
      
      try{
        await updateDetailsInDB(currentUser.uid,productName,productPrice,item.productId);
      }
      catch(error){
        console.log(error);
      }
    }

    const deleteExpense = async(id,serverId) => {
      console.log(items);
      const newArr = items.filter(x => x.productId != id);
      setItems(newArr);
      try{
        await deleteDetailsInDB(serverId);
      }
      catch(error){
        console.log(error);
      }
    }

    useEffect(()=>{
    
      async function fetchExpenseData(){
        if(currentUser && currentUser.uid){
          const expenseDetailsFromDB = await getExpenseDetails(currentUser.uid);
          setItems(expenseDetailsFromDB);
        }
      }
      fetchExpenseData()  
    },[currentUser,items])
  return (
    <>
    <div>
    <div style={{marginTop:'20px'}}>
    <div className='homeContainer'>Welcome to Expense Tracker</div>
    <div className='profileContainer'>Your Profile is incomplete. <Link to='/updateProfile'>Complete now</Link></div>
    </div>
    <div><button className='homeButton' onClick={handleSignOut}>Logout</button></div>
    </div>
    <div className='expenseAdder'>
    <div>
    <input type='text' placeholder='Enter the Expense Name' value={productName} onChange={e => setproductName(e.target.value)} className='expenseInputField'/>
    </div>
    <div>
    <input type='text' placeholder='Enter the Expense Price' value={productPrice} onChange={e => setproductPrice(e.target.value)} className='expenseInputField'/>
    </div>
    <div>
    <button className='expenseAdderButton' onClick={() => handleExpenseAdder()}>Add Expense</button>
    </div>
  </div>
  <div className='expenseAdderContainer'>
    {
      items.map((item) => {
        return(
          <li key={item.productId}><span style={{fontWeight:'600'}}>{item.productName}</span> <span style={{fontWeight:'600'}}>{item.productPrice}</span> <button className='expenseButton'>Edit</button> <button className='expenseButton' onClick={()=>deleteExpense(item.productId,item.serverId)}>Delete</button><hr/></li>
        )
      })
    }
  </div>
  </>
  )
}

export default Home