import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContexts } from '../../Contexts/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';


const ReviewData = ({ re,handleDelete }) => {
    const { user } = useContext(AuthContexts)
    const { serviceName, review, price, _id } = re
    
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