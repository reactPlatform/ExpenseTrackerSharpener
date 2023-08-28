import { initializeApp } from "firebase/app";
import {useEffect, useState} from 'react';
import {getAuth,onAuthStateChanged, updateProfile} from 'firebase/auth';
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBGJF0Euus_QZBTH4bsAie6cy0zZrhzK38",
  authDomain: "emailauthentication-f9e8f.firebaseapp.com",
  projectId: "emailauthentication-f9e8f",
  storageBucket: "emailauthentication-f9e8f.appspot.com",
  messagingSenderId: "804336942274",
  appId: "1:804336942274:web:35f6025e564faf715ecf5b"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();
const storage = getStorage();

export const database = getAuth(app);

export function useGetCurrentUser(){
  const [currentUser,setCurrentUser] = useState();
  useEffect(()=>{
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub;
  },[])
  console.log(currentUser);
 return currentUser; 
}

export async function uploadProfilePhoto(file,currentUser){
  const fileRef = ref(storage,currentUser.uid + '.png');
  const snapshot = await uploadBytes(fileRef, file);
  const photoURL = await getDownloadURL(fileRef);
  updateProfile(currentUser,{photoURL});

}

export function updateProfileDetails(name,currentUser){
  updateProfile(currentUser,{displayName:name})
}