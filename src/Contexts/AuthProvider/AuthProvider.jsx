import React, { createContext, useState ,useEffect} from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup } from "firebase/auth";
import app from './../../firebase/firebase.config';

export const AuthContexts = createContext()
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [lodding,setLodding] =useState(true)

    const singIn = (email,password) =>{
        setLodding(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logIn = (email,password) =>{
        setLodding(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = ()=>{
        setLodding(true);
        return signOut(auth)
    }
    const googleLogin = provider =>{
        setLodding(true);
        return signInWithPopup(auth,provider)
    }
    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLodding(false);
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
        googleLogin,
        lodding,setLodding
    }
    return (
        <AuthContexts.Provider value={authInfo}>
            {children}
        </AuthContexts.Provider>
    );
};

export default AuthProvider;