import React, { useEffect, useState } from 'react';
import ReviewData from '../ReviewData/ReviewData';


const Review = () => {
    const [review, setReview] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/review")
            .then(res => res.json())
            .then(data => {
                setReview(data.reverse())
            })
    }, [])
    const handleUpdate = event => {
        
    }
    console.log(review);
    return (
        <div className=" w-2/4 mx-auto my-10">

            <table className="table">
                
                <thead className='flex justify-around bg-base-200'>
                    <th>Edit</th>
                    <th>Name</th>
                    <th>Product</th>
                    <th>Review</th>
                    <th>Delete</th>
                </thead>
                <tbody>
                    {
                        review?.map(re => <ReviewData key={re._id} handleUpdate={handleUpdate} re={re}></ReviewData>)
                    }
                </tbody>
               
               

            </table>
        </div>
    );
};

export default Review;

