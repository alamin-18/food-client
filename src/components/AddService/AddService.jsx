import React from 'react';
import { toast } from 'react-hot-toast';
import useTitle from './../../hooks/hooks';

const AddService = () => {
    useTitle("Add Service")
    const handleservice = event => {
        {/* name, picture, description, price, _id  */ }
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const picture = form.picture.value
        const description = form.description.value
        const price = form.price.value
        // console.log(name, email, review)

        const product = {
            name,
            picture,
            description,
            price
        }
        fetch("http://localhost:5000/foods", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success("Product Added Succesfully")
                    form.reset();
                }
            })
            .catch(err => console.error(err))
    }
    return (
        <div>
            <div className='w-2/4 mx-auto my-4'>
                <form onSubmit={handleservice}>
                    <input type="text" name='name' placeholder="Product name Name" className="input input-bordered input-primary w-full max-w-xs my-4" />
                    <br />
                    <input type="text" name='picture' className="input input-bordered input-primary w-full max-w-xs my-4" placeholder='Image Url' />

                    <br />
                    <input type="text" name='description' placeholder='Description' className="input input-bordered input-primary w-full max-w-xs my-4" />

                    <br />
                    <input type="number" name='price' className="input input-bordered input-primary w-full max-w-xs my-4" placeholder='Price' />


                    <br />
                    <input className='btn btn-primary' type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default AddService;