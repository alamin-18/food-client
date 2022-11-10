import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContexts } from '../../Contexts/AuthProvider/AuthProvider';
import Food from '../Food/Food';

const Home = () => {
    const {User} = useContext(AuthContexts)
    const [foods,setfoods] =useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/foods")
        .then(res => res.json())
        .then(data => setfoods(data))
    },[])
    const limitData = foods.slice(1,4)
   
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            <div className='grid lg:grid-cols-3 gap-8 w-3/4 mx-auto my-5'>
                {
                    limitData.map(food =><Food key={food._id} food={food}></Food>)
                }
            </div>
            <div className='w-3/4 mx-auto'>
            <Link to='foods' ><button className='btn btn-outline btn-primary w-full'>See All Item</button></Link>
            </div>
        </div>
    );
};

export default Home;