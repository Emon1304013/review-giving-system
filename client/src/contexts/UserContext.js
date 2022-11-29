import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
const auth = getAuth(app);


export const AuthContext = createContext();

const UserContext = ({children}) => {
  const [user,setUser] = useState(null);
  const [loading,setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const createUser = (email,password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const signInUser = (email,password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const updateUserProfile = (name,photoURL) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName : name, photoURL: photoURL
    })
  }

  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  }

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
}



  useEffect(()=> {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      })

      return () => {
        unsubscribe();
      }

  },[])

  const authInfo = {
    user,
    setUser,
    createUser,
    signInUser,
    loading,
    googleSignIn,
    setLoading,
    logOutUser,
    updateUserProfile,
    

  }
  return <AuthContext.Provider value={authInfo}>
    {children}
  </AuthContext.Provider>;
};

export default UserContext;
