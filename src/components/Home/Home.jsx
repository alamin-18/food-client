import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Food from '../Food/Food';
import useTitle from './../../hooks/hooks';

const Home = () => {
    useTitle("Home")
    const [foods, setfoods] = useState([])
    useEffect(() => {
        fetch("https://food-server-five.vercel.app/foods")
            .then(res => res.json())
            .then(data => setfoods(data.reverse()))
    }, [])
    const limitData = foods.slice(1, 4)

    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Welcome To Rumi cooking</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            <div className='grid lg:grid-cols-3 gap-8 w-3/4 mx-auto my-5'>
                {
                    limitData.map(food => <Food key={food._id} food={food}></Food>)
                }
            </div>
            <div className='w-3/4 mx-auto'>
                <Link to='foods' ><button className='btn btn-outline btn-primary w-full'>See All Item</button></Link>
            </div>

            <div className='w-3/4 mx-auto my-10'>
                <h1 className='text-4xl font-bold text-center mb-8'>Features</h1>
                <section className="dark:bg-gray-800 dark:text-gray-100">
                    <div className="container flex flex-col-reverse mx-auto lg:flex-row">
                        <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 dark:bg-violet-400 dark:text-gray-900">
                            <div className="flex space-x-2 sm:space-x-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                </svg>
                                <div className="space-y-2">
                                    <p className="text-lg font-medium leading-snug">Lorem ipsum dolor sit amet</p>
                                    <p className="leading-snug">Praesentium ea et neque distinctio quas eius repudiandae quaerat obcaecati voluptatem similique!</p>
                                </div>
                            </div>
                            <div className="flex space-x-2 sm:space-x-4">

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                </svg>
                                <div className="space-y-2">
                                    <p className="text-lg font-medium leading-snug">Lorem ipsum dolor sit amet</p>
                                    <p className="leading-snug">Praesentium ea et neque distinctio quas eius repudiandae quaerat obcaecati voluptatem similique!</p>
                                </div>
                            </div>
                            <div className="flex space-x-2 sm:space-x-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                </svg>
                                <div className="space-y-2">
                                    <p className="text-lg font-medium leading-snug">Lorem ipsum dolor sit amet</p>
                                    <p className="leading-snug">Praesentium ea et neque distinctio quas eius repudiandae quaerat obcaecati voluptatem similique!</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 xl:w-3/5 dark:bg-gray-800">
                            <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
                                <img src="https://images.unsplash.com/photo-1657299156791-44140a28a518?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" className="rounded-lg shadow-lg dark:bg-gray-500 aspect-video sm:min-h-96" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div>
                <section className="dark:bg-gray-800 dark:text-gray-100">
                    <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                        <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
                        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                            <details>
                                <summary className="py-2 outline-none cursor-pointer focus:underline">Optio maiores eligendi molestiae totam dolores similique?</summary>
                                <div className="px-4 pb-4">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde neque in fugiat magni, quas animi enim veritatis deleniti ex. Impedit.</p>
                                </div>
                            </details>
                            <details open="">
                                <summary className="py-2 outline-none cursor-pointer focus:underline">Modi dolorem veritatis culpa quos consequuntur beatae itaque excepturi perspiciatis?</summary>
                                <div className="px-4 pb-4">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aspernatur quae, eos explicabo odit minima libero veniam similique quibusdam doloribus facilis ipsa accusantium vel maiores corrupti! Libero voluptate a doloribus?</p>
                                </div>
                            </details>
                            <details>
                                <summary className="py-2 outline-none cursor-pointer focus:underline">Magni reprehenderit possimus debitis?</summary>
                                <div className="px-4 pb-4 space-y-2">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptates aspernatur dolores in consequatur doloremque inventore reprehenderit, consequuntur perspiciatis architecto.</p>
                                    <p>Sed consectetur quod tenetur! Voluptatibus culpa incidunt veritatis velit quasi cupiditate unde eaque! Iure, voluptatibus autem eaque unde possimus quae.</p>
                                </div>
                            </details>
                        </div>
                    </div>
                </section>
                <section>
                    <h1 className='text-4xl font-bold text-center my-10'>SPECIALITIES</h1>
                    <div className='lg:w-2/4 gap-4 mb-10 mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
                        <div className='flex gap-4'>
                        <div className="avatar">
                            <div className="w-24">
                                <img src="http://www.nicdarkthemes.com/themes/restaurant/wp/demo/restaurant/wp-content/uploads/sites/2/2019/01/img-03.jpg" alt='' />
                            </div>
                        </div>
                        <div>
                            <h1 className='text-2xl'>PASTA WITH FISH.............$ 12</h1>
                            <p>Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                        </div>
                        <div className='flex gap-4'>
                        <div className="avatar">
                            <div className="w-24">
                                <img src="http://www.nicdarkthemes.com/themes/restaurant/wp/demo/restaurant/wp-content/uploads/sites/2/2019/01/img-04.jpg" alt='' />
                            </div>
                        </div>
                        <div>
                            <h1 className='text-2xl'>FRESH MEAT...........$ 26</h1>
                            <p>Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                        </div>
                        <div className='flex gap-4'>
                        <div className="avatar">
                            <div className="w-24">
                                <img src="http://www.nicdarkthemes.com/themes/restaurant/wp/demo/restaurant/wp-content/uploads/sites/2/2019/01/img-05.jpg" alt='' />
                            </div>
                        </div>
                        <div>
                            <h1 className='text-2xl'>SPAGHETT.............$ 19</h1>
                            <p>Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                        </div>
                        <div className='flex gap-4'>
                        <div className="avatar">
                            <div className="w-24">
                                <img src="http://www.nicdarkthemes.com/themes/restaurant/wp/demo/restaurant/wp-content/uploads/sites/2/2019/01/img-06.jpg" alt='' />
                            </div>
                        </div>
                        <div>
                            <h1 className='text-2xl'>VEGETARIAN SOUP.............$ 22</h1>
                            <p>Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                        </div>
                        <div className='flex gap-4'>
                        <div className="avatar">
                            <div className="w-24">
                                <img src="http://www.nicdarkthemes.com/themes/restaurant/wp/demo/restaurant/wp-content/uploads/sites/2/2019/01/img-07.jpg" alt='' />
                            </div>
                        </div>
                        <div>
                            <h1 className='text-2xl'>NOODLES.............$ 5</h1>
                            <p>Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                        </div>
                        <div className='flex gap-4'>
                        <div className="avatar">
                            <div className="w-24">
                                <img src="http://www.nicdarkthemes.com/themes/restaurant/wp/demo/restaurant/wp-content/uploads/sites/2/2019/01/img-08.jpg" alt='' />
                            </div>
                        </div>
                        <div>
                            <h1 className='text-2xl'>CHICKEN.............$ 32</h1>
                            <p>Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                        </div>
                        <div className='flex gap-4'>
                        <div className="avatar">
                            <div className="w-24">
                                <img src="http://www.nicdarkthemes.com/themes/restaurant/wp/demo/restaurant/wp-content/uploads/sites/2/2019/01/img-09.jpg" alt='' />
                            </div>
                        </div>
                        <div>
                            <h1 className='text-2xl'>VEGETARIAN FRIED.............$ 52</h1>
                            <p>Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                        </div>
                        <div className='flex gap-4'>
                        <div className="avatar">
                            <div className="w-24">
                                <img src="http://www.nicdarkthemes.com/themes/restaurant/wp/demo/restaurant/wp-content/uploads/sites/2/2019/01/img-10.jpg" alt='' />
                            </div>
                        </div>
                        <div>
                            <h1 className='text-2xl'>SALMON PASTA.............$ 125</h1>
                            <p>Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                        </div>
                    </div>
                </section>
                <section>
                    <section className="py-6 mb-10 dark:bg-gray-800 dark:text-gray-50">
                        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                            <div className="py-6 md:py-0 md:px-6">
                                <h1 className="text-4xl font-bold">Get in touch</h1>
                                <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
                                <div className="space-y-4">
                                    <p className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Fake address, 9999 City</span>
                                    </p>
                                    <p className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                        </svg>
                                        <span>123456789</span>
                                    </p>
                                    <p className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                        </svg>
                                        <span>contact@business.com</span>
                                    </p>
                                </div>
                            </div>
                            <form novalidate="" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid">
                                <label className="block">
                                    <span className="mb-1">Full name</span>
                                    <input type="text" placeholder="Leroy Jenkins" className="block w-full
                                    input input-bordered  max-w-xs rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800" />
                                </label>
                                <label className="block">
                                    <span className="mb-1">Email address</span>
                                    <input type="email" placeholder="leroy@jenkins.com" className="block input input-bordered  w-full max-w-xs rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800" />
                                </label>
                                <label className="block">
                                    <span className="mb-1">Message</span>
                                    <textarea rows="3" className="block w-full input input-bordered   max-w-xs rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800"></textarea>
                                </label>
                                <button type="button" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 dark:bg-primary dark:text-gray-900 focus:ring-violet-400 hover:ring-violet-400">Submit</button>
                            </form>
                        </div>
                    </section>
                </section>
            </div>
        </div>
    );
};

export default Home;