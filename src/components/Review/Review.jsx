import React, { useEffect, useState,useContext } from 'react';
import { AuthContexts } from '../../Contexts/AuthProvider/AuthProvider';
import ReviewData from '../ReviewData/ReviewData';
import { toast } from 'react-hot-toast';
import useTitle from './../../hooks/hooks';


const Review = () => {
    useTitle("Review")
    const {user} = useContext(AuthContexts)
    const [review, setReview] = useState([])
    const [res,setRef] = useState(false)

    //delete review
    const handleDelete = id => {
        console.log(id);
        const proceed = window.confirm('Are you sure, you want to remove Review');
        if (proceed) {
            fetch(`https://food-server-five.vercel.app/review/${id}`, {
                method: 'DELETE',
                headers: {
                    
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.msg) {
                        setRef(true)
                        toast.success('deleted successfully');  
                    }
                })
                .catch(err => console.log(err))
        }
    }

    useEffect(() => {
        fetch("https://food-server-five.vercel.app/review")
            .then(res => res.json())
            .then(data => {
                setReview(data.reverse())
            })
    }, [res])
    const allReview = review.filter(rev =>rev.email === user?.email)
    // console.log(review);
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
                        allReview?.map(re => <ReviewData handleDelete={handleDelete} key={re._id} re={re}></ReviewData>)
                    }
                </tbody>
               
               

            </table>
        </div>
    );
};

export default Review;

