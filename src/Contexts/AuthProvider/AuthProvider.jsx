import React, { createContext, useState ,useEffect} from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup } from "firebase/auth";
import app from './../../firebase/firebase.config';

export const AuthContexts = createContext()
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)

    const singIn = (email,password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = ()=>{
        return signOut(auth)
    }
    const googleLogin = provider =>{
        return signInWithPopup(auth,provider)
    }
    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser);
            setUser(currentUser);
            // setLoading(false);
        });

        return () =>{
            return unsubscribe();
        }
    }, [])


    const authInfo = {
        user,
        setUser,
        singIn,
        logIn,
        logOut,
        googleLogin
    }
    return (
        <AuthContexts.Provider value={authInfo}>
            {children}
        </AuthContexts.Provider>
    );
};

export default AuthProvider;