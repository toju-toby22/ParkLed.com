import React from "react";
import Navbar from "../Components/Nav-bar"
import { PhoneIcon, ArrowSmRightIcon } from '@heroicons/react/outline';
import { ChipIcon, SupportIcon } from '@heroicons/react/solid'
import supportImg from '../Assets/support.jpg'
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
} from 'react-icons/fa'


function Contact() {
    return (
        <>
            <div>
                <Navbar />


                <div name='support' className='w-full py-20'>
                    <div className='w-full h-[700px] bg-gray-900/90 absolute'>
                        <img className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt="/" />
                    </div>

                    <div className='max-w-[1240px] mx-auto text-white relative'>
                        <div className='px-4 py-12'>
                            <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>Support</h2>
                            <h3 className='text-5xl font-bold py-6 text-center'>Contact Us</h3>
                            <p className='py-4 text-3xl text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In repudiandae veritatis ratione error tenetur, voluptates architecto possimus ad! Omnis minima ea quidem quisquam unde beatae, minus illo et cum vel?</p>
                        </div>

                        <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
                            <div className='bg-white rounded-xl shadow-2xl'>
                                <div className='p-8'>
                                    <PhoneIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                                    <h3 className='font-bold text-2xl my-6'>Phone</h3>
                                    <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
                                </div>
                                <div className='bg-slate-100 pl-8 py-4'>
                                    <p className='flex items-center text-indigo-600'>Contact Us <ArrowSmRightIcon className='w-5 ml-2' /></p>
                                </div>
                            </div>
                            <div className='bg-white rounded-xl shadow-2xl'>
                                <div className='p-8'>
                                    <SupportIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                                    <h3 className='font-bold text-2xl my-6'>Technical Support</h3>
                                    <p className='text-gray-600 text-xl'><span className='font-bold'>Email:</span> ttotoju@gmail.com</p>
                                </div>
                                <div className='bg-slate-100 pl-8 py-4'>
                                    <p className='flex items-center text-indigo-600'>Contact Us <ArrowSmRightIcon className='w-5 ml-2' /></p>
                                </div>
                            </div>
                            <div className='bg-white rounded-xl shadow-2xl'>
                                <div className='p-8'>
                                    <ChipIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                                    <h3 className='font-bold text-2xl my-6'>Media Inquiries</h3>
                                    <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
                                        <FaFacebook />
                                        <FaInstagram />
                                        <FaTwitter />
                                    </div>
                                    {/* <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p> */}
                                </div>
                                <div className='bg-slate-100 pl-8 py-4'>
                                    <p className='flex items-center text-indigo-600'>Contact Us <ArrowSmRightIcon className='w-5 ml-2' /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Contact;