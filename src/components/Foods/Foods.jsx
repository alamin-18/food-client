import React, { useEffect, useState } from 'react';
import AllFood from '../AllFood/AllFood';
import useTitle from './../../hooks/hooks';


const Foods = () => {
    useTitle("Foods")
    const [foods,setfoods] =useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/foods")
        .then(res => res.json())
        .then(data => setfoods(data.reverse()))
    },[])
    return (
        <div>
            <div className='grid lg:grid-cols-3 gap-10 w-3/4 mx-auto my-5'>
                {
                    foods.map(food => <AllFood key={food._id} food={food}></AllFood>)
                }
            </div>
        </div>
    );
};

export default Foods;