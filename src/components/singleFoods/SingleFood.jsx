import React from 'react';
import {  useLoaderData } from 'react-router-dom';

const SingleFood = () => {
    const food = useLoaderData()
    const { name, picture, description, price,  } = food
    return (
        <div>
            <div className="card w-2/4 mx-auto my-4 bg-base-100 shadow-xl ">
                <figure><img  src={picture} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className='text-xl font-semibold'>Price: $ {price}</p>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now!</button>
                    </div>
                </div>
            </div>
                <div className='w-2/4 mx-auto my-4'>
                <form action="">
                <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs my-4" />
                <br />
                <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs my-4" />
                <br />
                <textarea className="textarea  textarea-primary my-4" placeholder="Your Review"></textarea>
                <br />
                <input className='btn btn-primary' type="submit" value="Submit" />
                </form>
                </div>
            
        </div>
    );
};

export default SingleFood;