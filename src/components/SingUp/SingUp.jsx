import React from 'react';
import { Link } from 'react-router-dom';

const SingUp = () => {
    

    const handleSubmit = event =>{
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const password = form.password.value
        const email = form.email.value
        console.log(name,password,email)
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sing Up now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Enter Your Emial" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Enter Your password" className="input input-bordered" />
                                <label className="label">
                                    
                                    <Link to='/login' className="label-text-alt link link-hover text-blue-600">Already Have a Account Log In?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sing Up</button>
                            </div>
                            </form>
                        </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-outline btn-primary">Google</button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingUp;