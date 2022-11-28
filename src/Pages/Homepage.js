import React from "react";
import Navbar from "../Components/Nav-bar"
// import img2 from "../Assets/images.png"
import { CloudUploadIcon, DatabaseIcon, PaperAirplaneIcon, ServerIcon } from "@heroicons/react/solid";
// import { FaBeer } from 'react-icons/fa';
import supportImg from '../Assets/support.jpg'
import {Link} from "react-router-dom"


function Homepage() {
    return (
        <>
            <div>
                <Navbar />
            </div>



            <div className='w-full h-screen crn bg-zinc-100 flex flex-col justify-between md:w-full h-screen'>
                <div className='grid items-center  md:grid-cols-2 max-w-[1240px] m-auto'>
                    <div className='flex flex-col justify-center md:items-start w-full px-3 py-12 mt-15'>
                        <p className='text-2xl mt-14'>Unique training on E-commerce</p>
                        <h1 className='py-3 text-5xl md:text-7xl font-bold'>Digital Marketing</h1>
                        <p className='text-2xl'>The Future of E-commerce</p>
                        <Link to="/courses"><button className='py-4 px-8 sm:w[60%] my-5'>Apply Here</button></Link>
                    </div>
                    <div>
                        <p className='text-5xl py-8 text-gray-500 text-center md:hidden'>
                            Digital Marketing courses forr E-commerce Virtual Assistants and Startup E-commerce Entrepreneurs
                        </p>
                    </div>

                </div>
            </div>

            <div name='support' className='w-full md:py-40'>
                <div className='w-full h-[700px] bg-gray-900/90 absolute'>
                    <img className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt="/" />
                </div>

                <div className='max-w-[1240px] mx-auto text-white relative'>
                    <div className='px-4 py-12'>
                        {/* <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>PARKLADE</h2> */}
                        <h3 className='text-5xl font-bold py-6 text-center'>PARKLADE</h3>
                        <p className='py-4 text-3xl text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In repudiandae veritatis ratione error tenetur, voluptates architecto possimus ad! Omnis minima ea quidem quisquam unde beatae, minus illo et cum vel?</p>
                    </div>

                </div>
            </div>

            <div className="dive">
                <div className='flex flex-col py-8 md:min-w-[760px] bottom-[5%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
            border border-slate-300 rounded-xl text-center shadow-xl'>
                    <p className='text-2xl py-3'>Top Courses</p>
                    <div className='flex justify-between flex-wrap px-7 text-2l'>
                        <p className='flex items-center px-2 py-2 text-slate-500 text-1xl'><CloudUploadIcon className='h-6 text-indigo-600 px-2' />Product Research</p>
                        <p className='flex items-center px-2 py-2 text-slate-500 text-1xl'><DatabaseIcon className='h-6 text-indigo-600 px-2' />Email Marketing</p>
                        <p className='flex items-center px-2 py-2 text-slate-500 text-1xl'><ServerIcon className='h-6 text-indigo-600 px-2' />Algorithim Targeting</p>
                        <p className='flex items-center px-2 py-2 text-slate-500 text-1xl'><PaperAirplaneIcon className='h-6 text-indigo-600 px-2' /> Shopify</p>

                    </div>
                </div>
            </div>
            <div class="grid gap-4 grid-cols-3 text-center px-2 py-8 m-7 mt-30">
                <div className='bg-indigo-300 h-7 '>01</div>
                <div className='bg-indigo-300 h-7 '>02</div>
                <div className='bg-indigo-300 h-7 '>03</div>
                <div className='bg-indigo-300 h-7 '>04</div>
                <div className='bg-indigo-300 h-7 '>04</div>
                <div className='bg-indigo-300 h-7 '>04</div>
            </div>
        </>
    );
}


export default Homepage;