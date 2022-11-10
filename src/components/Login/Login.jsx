import { GoogleAuthProvider } from 'firebase/auth';
import React,{ useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContexts } from '../../Contexts/AuthProvider/AuthProvider';
import useTitle from './../../hooks/hooks';

const Login = () => {
    useTitle("Login")
    const {logIn,googleLogin} = useContext(AuthContexts)
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';
    
    const provider = new GoogleAuthProvider()
    const handleLogin = event =>{
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email,password)
        logIn(email,password)
        .then(result =>{
            const user = result.user
            console.log(user);
            navigate(from, { replace: true });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
    }
    const handleGoogle = ()=>{
        googleLogin(provider)
        .then(result =>{
           const user = result.user
            console.log(user)
            navigate(from, { replace: true });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
   }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <Link to='/singup' className="label-text-alt link link-hover">Sing Up Now?</Link>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </form>
                        </div>
                        <div className="form-control mt-6">
                            <button onClick={handleGoogle} className="btn btn-outline btn-primary">Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;