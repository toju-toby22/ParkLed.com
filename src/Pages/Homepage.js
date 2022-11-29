import React from "react";
import Navbar from "../Components/Nav-bar"
// import img2 from "../Assets/images.png"
import { CloudUploadIcon, DatabaseIcon, PaperAirplaneIcon, ServerIcon } from "@heroicons/react/solid";
// import { FaBeer } from 'react-icons/fa';
import supportImg from '../Assets/cyber-bg.png'
import logo from '../Assets/logo.png'
import { CheckIcon } from '@heroicons/react/outline';

import {Link} from "react-router-dom"


function Homepage() {
    return (
        <>
            <div>
                <Navbar />
            </div>


            <div name='support' className='w-full md:py-0'>
                <div className='w-full h-[500px] bg-gray-900/90 absolute'>
                    <img className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt="/" />
                </div>

                <div className='max-w-[1240px] mx-auto text-white relative'>
                    <div className='px-4 py-12'>
                        {/* <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>PARKLADE</h2> */}
                        <h3 className='text-5xl font-bold py-6 text-center mt-10'>PARKLADE DIGITAL ACADEMY</h3>
                        <p className='py-4 text-xl  break-normal md:break-all text-slate-300 text-center w-full'>Parklade Digital Academy (PDA) 
                        is the go-to Training Center Hub for participant to deploy the 
                        skill set required in providing Digital and E-comerce solutions</p>
                    </div>

                </div>
            </div>

            <div className='w-full h-screen crn bg-zinc-100 flex flex-col justify-between'>
                <div className='grid items-center  md:grid-cols-2 max-w-[1240px] p-auto m-auto'>
                    <div className='flex flex-col items-center md:items-start w-full h-screen px-3 py-12'>
                        <p className='text-1xl'>Unique training on E-commerce</p>
                        <h1 className='py-3 text-5xl md:text-7xl font-bold'>Digital Marketing</h1>
                        <p className='text-2lg'>The Future of E-commerce</p>
                        <Link to="/courses"><button className='py-4 px-8 sm:w[60%] my-5'>Apply Here</button></Link>
                    </div>
                    <div>

                    <img className='w-full' src={logo} alt="/" />
                        {/* <p className='text-5xl py-8 text-gray-500 text-center'>
                            Digital Marketing courses forr E-commerce Virtual Assistants and Startup E-commerce Entrepreneurs
                        </p> */}
                    </div>

                </div>
            </div>

            

            {/* <div className="dive">
                <div className='flex flex-col py-8 md:min-w-full bottom-[5%]
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
            </div> */}
         <div name='platforms' className='w-full py-32'>
      <div className='max-w-[1240px] mx-auto px-2'>
        <h2 className='text-5xl font-bold text-center'>All-In-One Platform</h2>
        <p className='text-2xl py-8 text-gray-500 text-center'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis,
          ab. Officia sunt nulla aspernatur culpa, eaque tenetur excepturi
          nostrum tempore.
        </p>

        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>

          <div className='flex'>
            <div>
              <CheckIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Notifications</h3>
              <p className='text-lg pt-2 pb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores maxime deserunt voluptatibus consequatur similique
                voluptates!
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <CheckIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Notifications</h3>
              <p className='text-lg pt-2 pb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores maxime deserunt voluptatibus consequatur similique
                voluptates!
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <CheckIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Notifications</h3>
              <p className='text-lg pt-2 pb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores maxime deserunt voluptatibus consequatur similique
                voluptates!
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <CheckIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Notifications</h3>
              <p className='text-lg pt-2 pb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores maxime deserunt voluptatibus consequatur similique
                voluptates!
              </p>
            </div>
          </div>
        

        </div>
      </div>
    </div>
        </>
    );
}


export default Homepage;