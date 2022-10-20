import React, { createContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);

  const googleLogin = (provider) => {
    return signInWithPopup(auth, provider);
  };

  const githubLogin = (provider) =>{
    return signInWithPopup(auth, provider)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, [auth]);




  const authInfo = { user, setUser, googleLogin, githubLogin };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
