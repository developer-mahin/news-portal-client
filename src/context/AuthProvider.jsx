import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/firebase.config";



const auth = getAuth(app);
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true)


  const googleLogin = (provider) => {
    setLoading(true)
    return signInWithPopup(auth, provider);
  };

  const githubLogin = (provider) => {
    setLoading(true)
    return signInWithPopup(auth, provider);
  };

  const logOut = () => {
    setLoading(true)
    return signOut(auth);
  };

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginWithEmailPassword = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (name, email) =>{
    return updateProfile(auth.currentUser,name, email)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false)
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);



  const authInfo = {
    user,
    loading,
    setUser,
    googleLogin,
    githubLogin,
    logOut,
    createUser,
    loginWithEmailPassword,
    updateUserProfile
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
