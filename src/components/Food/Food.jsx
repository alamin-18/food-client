import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Food = ({food}) => {
    const {name,picture,description,price,_id} = food
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl ">
                <figure><PhotoProvider>
                        <PhotoView src={picture}>
                        <img className='h-44 w-full' src={picture} alt="" />
                        </PhotoView>
                    </PhotoProvider></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className='text-xl font-semibold'>Price: $ {price}</p>
                    <p>{description.slice(1,100) + "..."}</p>
                    <div className="card-actions justify-end">
                        <Link to={`foods/${_id}`}><button className="btn btn-primary">Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Food;