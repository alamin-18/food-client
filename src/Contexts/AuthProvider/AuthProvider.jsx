import React, { createContext, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from './../../firebase/firebase.config';

export const AuthContexts = createContext()
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser] = useState({Name:"Alamin",email:"alamin@gmail.com"})

    const singIn = (email,password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const authInfo = {
        user,
        setUser,
        singIn,
        logIn
    }
    return (
        <AuthContexts.Provider value={authInfo}>
            {children}
        </AuthContexts.Provider>
    );
};

export default AuthProvider;