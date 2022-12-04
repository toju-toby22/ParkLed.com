import React from "react";
import Navbar from "../Components/Nav-bar"
import Footer from "../Components/footer"
// import img2 from "../Assets/images.png"
// import { CloudUploadIcon, DatabaseIcon, PaperAirplaneIcon, ServerIcon } from "@heroicons/react/solid";
// import { FaBeer } from 'react-icons/fa';
import supportImg from '../Assets/cyber-bg.png'
// import logo from '../Assets/logo.png'
// import { CheckIcon } from '@heroicons/react/outline';
import { Link } from "react-router-dom"

import { FaFacebookF } from "react-icons/fa";
// import { FaShoppingBag } from "react-icons/fa";
// import { FaChartLine } from "react-icons/fa";
// import { HiOutlineMailOpen } from "react-icons/hi";
import { RiCustomerServiceFill } from "react-icons/ri";
import { FcCustomerSupport } from "react-icons/fc";
import { ImPageBreak } from "react-icons/im";


function Homepage() {
    return (
        <>
            <div>
                <Navbar />
            </div>


            <div name='support' className='w-full py-20'>
                <div className='w-full h-[500px] bg-gray-900/90 absolute'>
                    <img className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt="/" />
                </div>

                <div className='max-w-[1240px] mx-auto text-white relative'>
                    <div className='px-4 py-12'>
                        <h2 className='text-5xl font-bold py-6 text-center'>PARKLADE DIGITAL ACADEMY</h2>
                        <p className='py-4 text-center text-lg text-slate-300'>
                            Parklade Digital Academy provides the skill sets required to participate and
                            compete in the 21st-century digital marketing and e-commerce industry.
                            Our curriculum is strategically structured to deliver practical and
                            personalized hands-on training to our students.</p>
                    </div>
                    <div className="flex justify-center items-center gap-3">
                        <Link to="/courses"><button className='py-4 px-8 sm:w[60%] my-5 text-xl drop-shadow-md'>Apply Here</button></Link>
                        <Link to="/courses"><button className='border-4 border-black py-4 px-8 bg-transparent text-indigo-600 my-4 text-xl drop-shadow-md'>
                            Courses
                        </button></Link>
                    </div>
                </div>
            </div>


            {/* <div className='w-full h-screen crn bg-zinc-100 flex flex-col justify-between md:pb-20'>
                <div className='grid items-center  md:grid-cols-2 max-w-[1240px] p-auto m-auto'>
                    <div className='flex flex-col  justify-center md:items-start w-full px-3'>
                        <p className='text-1xl md:pt-8'>Unique training on E-commerce</p>
                        <h1 className='py-3 text-5xl md:text-7xl font-bold'>Digital Marketing</h1>
                        <p className='text-2lg'>The Future of E-commerce</p>
                        <Link to="/courses"><button className='py-4 px-8 sm:w[60%] my-5'>Apply Here</button></Link>
                    </div>
                    <div>

                        <img className='w-full' src={logo} alt="/" />
                        <p className='text-5xl py-8 text-gray-500 text-center'>
                            Digital Marketing courses forr E-commerce Virtual Assistants and Startup E-commerce Entrepreneurs
                        </p>
                    </div>

                </div>
            </div> */}



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
            <div name='platforms' className='w-full py-10'>
                <div className='max-w-[1240px] mx-auto px-2'>
                    <h2 className='text-5xl font-bold text-center'>Job Opportunities</h2>
                    <p className='text-lg py-8 text-gray-500 text-center'>
                        Acquire digital skill sets that help you get jobs as virtual assistants in the e-commerce
                        industry like product researcher, email marketing, customer service, product description, etc.
                        PDA training opens business opportunities for startup entrepreneurs in digital and
                        e-commerce businesses opportunities.
                    </p>

                    <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>

                        <div className='flex flex-col justify-center items-center text-center bg-zinc-200
                          border border-slate-300 rounded-xl shadow-xl p-auto m-auto'>
                            <div>
                                <FcCustomerSupport className='h-[100px] w-7 mr-4 text-indigo-600' />
                            </div>
                            <div>
                                <h3 className='font-bold text-lg'>Virtual Assistant</h3>
                                <p className='text-lg pt-2 pb-4'>
                                    Millions of virtual assistants opportunities opened at E-com Stores
                                </p>
                            </div>
                        </div>

                        <div className='flex flex-col justify-center items-center text-center bg-zinc-200
                           border border-slate-300 rounded-xl shadow-xl p-auto m-auto '>
                            <div>
                                <FaFacebookF className='h-[100px] w-7 mr-4 text-indigo-600' />
                            </div>
                            <div>
                                <h3 className='font-bold text-lg'>Facebook Ads Manager</h3>
                                <p className='text-lg pt-2 pb-4'>
                                    Monitior and oversee the progress of Facebook Ads in different types of online business
                                </p>
                            </div>
                        </div>

                        <div className='flex flex-col justify-center items-center text-center bg-zinc-200
            border border-slate-300 rounded-xl shadow-xl '>
                            <div>
                                <ImPageBreak className='h-[100px] w-7 mr-4 text-indigo-600' />
                            </div>
                            <div>
                                <h3 className='font-bold text-lg'>Landing page Creator  </h3>
                                <p className='text-lg pt-2 pb-4'>
                                    Apply your copy writing skills in Landing Page <br /> creation.
                                </p>
                            </div>
                        </div>

                        <div className='flex flex-col justify-center items-center text-center bg-zinc-200
            border border-slate-300 rounded-xl shadow-xl '>
                            <div>
                                <RiCustomerServiceFill className='h-[100px] w-7 mr-4 text-indigo-600' />
                            </div>
                            <div>
                                <h3 className='font-bold text-lg'>Customer Service</h3>
                                <p className='text-lg pt-2 pb-4'>
                                    Learn communications skills to be able to relate well with <br />customers.
                                </p>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}


export default Homepage;