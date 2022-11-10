import React, { useContext,useState } from 'react';
import { AuthContexts } from '../../Contexts/AuthProvider/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import useTitle from './../../hooks/hooks';

const ReviewEdit = () => {
    useTitle("Edit Review")
    const { user } = useContext(AuthContexts)
    const review = useLoaderData()
    const [editReview,setEditReview] =useState(review.review)

    const handleReviewEdit = (event) => {
        event.preventDefault()
        const form = event.target
        // const review = form.review.value
        
        fetch(`http://localhost:5000/review/${review._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                
            },
            body: JSON.stringify({editReview})
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }


return (
    <div>
        <div className='w-2/4 mx-auto my-4'>
            <form onSubmit={handleReviewEdit}>
                <input type="text" defaultValue={user?.displayName} name='name' placeholder="Your Name" className="input input-bordered input-primary w-full max-w-xs my-4" />
                <br />
                <input type="email" name='email' defaultValue={user?.email} readOnly className="input input-bordered input-primary w-full max-w-xs my-4" />
                <br />
                <textarea name='review' onChange={(e)=>setEditReview(e.target.value)} value={editReview} className="textarea w-80 h-40 textarea-primary my-4" placeholder="Your Review">
                    
                </textarea>
                <br />
                <input className='btn btn-primary' type="submit" value="Update" />
            </form>
        </div>
        <div></div>
    </div>
);
};

export default ReviewEdit;