import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContexts } from '../../Contexts/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';


const ReviewData = ({ re, }) => {
    const { user } = useContext(AuthContexts)
    const { serviceName, review, price, _id } = re
    const handleDelete = id => {
        console.log(id);
        const proceed = window.confirm('Are you sure, you want to remove Review');
        if (proceed) {
            fetch(`http://localhost:5000/review/${id}`, {
                method: 'DELETE',
                headers: {
                    // authorization: `Bearer ${localStorage.getItem('genius-token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.msg) {
                        toast.success('deleted successfully');  
                    }
                })
                .catch(err => console.log(err))
        }
    }
    return (
        <div>
            <tr>
                <th>

                    <Link to={`/reviewedit/${_id}`}>
                        <button className="btn btn-secondary">Edit</button>
                    </Link>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={user?.photoURL} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{user?.displayName}</div>

                        </div>
                    </div>
                </td>
                <td>
                    {serviceName}
                    <br />
                    <span className="badge badge-ghost badge-sm">Price: {price}</span>
                </td>
                <td>{review}</td>
                <th>
                    <button onClick={() =>handleDelete(_id)} className="btn btn-error btn-xs">Delete</button>
                </th>
            </tr>


        </div>
    );
};

export default ReviewData;