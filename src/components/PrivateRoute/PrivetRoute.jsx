import React,{useContext} from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContexts } from '../../Contexts/AuthProvider/AuthProvider';

const PrivetRoute = ({children}) => {
    const {user,lodding} = useContext(AuthContexts)
    
    const location  = useLocation()

    if(lodding) {
        return <progress className="progress w-56"></progress>
    }

    if(user){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};


export default PrivetRoute;