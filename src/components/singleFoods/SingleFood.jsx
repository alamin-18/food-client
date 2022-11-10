import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContexts } from '../../Contexts/AuthProvider/AuthProvider';

const SingleFood = () => {
    const food = useLoaderData()
    const { user } = useContext(AuthContexts)
    const { name, picture, description, price,_id } = food;

    const handleReview = event => {
        event.preventDefault()
        const form = event.target
        const customarName = form.name.value
        const email = form.email.value
        const review = form.review.value
        // console.log(name, email, review)

        const message = {
            serviceId: _id,
            serviceName: name,
            price,
            customarName,
            email,
            review
        }
        fetch("http://localhost:5000/review",{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(message)
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data);
            if(data.acknowledged){
                toast.success("Review Added Succesfully")
                form.reset();
            }
        })
        .catch(err => console.error(err))

    }
       

    return (
        <div>
            <div className="card w-2/4 mx-auto my-4 bg-base-100 shadow-xl ">
                <figure><img src={picture} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className='text-xl font-semibold'>Price: $ {price}</p>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now!</button>
                    </div>
                </div>
            </div>
            {/* review section */}
            <h1 className='text-4xl font-bold text-center'>Review now!</h1>
            <div className='w-2/4 mx-auto my-4'>
                <form onSubmit={handleReview}>
                    <input type="text" name='name' placeholder="Your Name" className="input input-bordered input-primary w-full max-w-xs my-4" />
                    <br />
                    <input type="email" name='email' value={user?.email} readOnly className="input input-bordered input-primary w-full max-w-xs my-4" />
                    <br />
                    <textarea name='review' className="textarea w-80 h-40 textarea-primary my-4" placeholder="Your Review"></textarea>
                    <br />
                    <input className='btn btn-primary' type="submit" value="Submit" />
                </form>
            </div>

        </div>
    );
};

export default SingleFood;