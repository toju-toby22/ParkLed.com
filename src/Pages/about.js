import React from "react";
import Navbar from "../Components/Nav-bar"
import Footer from "../Components/footer"
import simplilearn from "../Assets/simplilearn.jpg"
import v7DJGlU from "../Assets/v7DJGlU.jpg"
import ComputerLabBanner from "../Assets/istockphoto.jpg"
import { Link } from "react-router-dom";



function About() {
    return (
        <>
            <div>
                <Navbar />
                <div className='text-center pt-20'>
                    <h2 className='text-5xl font-bold pt-10'>About Parklade</h2>
                </div>
                <div name='home' className='w-full bg-zinc-200 flex flex-col justify-between rounded-xl mt-10'>
                    <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
                        <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                            <p className='text-sm'>Parklade Digital Services Ltd (PDSL) established Parklade Digital Academy to deliver 
                            cutting-edge Digital Marketing and e-commerce training. The objective is to produce skillful Virtual 
                            Assistants for flourishing online e-commerce store businesses. We also create and develop capacities in 
                            entrepreneurship by training new startup online e-commerce entrepreneurs. Our training modules PD01 and 
                            PD02 are structured strategically to provide much-needed skill 
                            sets required to compete and be relevant in the evolving digital marketing and e-commerce space</p>
                            {/* <button className='py-3 px-6 sm:w-[60%] my-4'>Get Started</button> */}
                        </div>
                        <div className="p-5">
                            <img className='w-full' src={simplilearn} alt="/" />
                        </div>
                    </div>
                </div>

                <div name='home' className='w-full bg-zinc-200 flex flex-col justify-between  rounded-xl mt-10'>
                    <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>

                        <div className="p-5">
                            <img className='w-full' src={v7DJGlU} alt="/" />
                        </div>
                        <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                            <p className='text-sm'>   We have partnered with foreign digital marketing interest to ensure that PDA enjoys technical
                                support for the success of her programs. Locally too, we have been reaching out with local
                                indigenous institutions who are set up to promote capacity building in entrepreneurship
                                especially in the digital marketing industry.</p>
                            {/* <button className='py-3 px-6 sm:w-[60%] my-4'>Get Started</button> */}
                        </div>

                    </div>
                </div>


                <div name='home' className='w-full bg-zinc-200 flex flex-col justify-between rounded-xl mt-10'>
                    <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
                        <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                            <p className='text-sm'>  Our trainers are digital marketing experts with several years of experience both in
                                training and running e-commerce stores for online business owners.</p>
                            <Link className="py-3 px-6 sm:w-[60%] my-4" to="/courses"><button className='py-3 px-6 sm:w-[60%] my-4'>Get Started</button></Link>
                        </div>
                        <div className="p-5">
                            <img className='w-full' src={ComputerLabBanner} alt="/" />
                        </div>
                    </div>
                </div>

                <div name='about' className='w-full py-10'>
                    <div className='max-w-[1240px] mx-auto'>
                        <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
                            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Premium</span>
                            <div>
                                <p className='text-4xl font-bold py-4 flex text-sky-600'>Our Vision</p>
                            </div>
                            <p className='text-lg md:text-lg  py-6  text-slate-900'>To be the go-to academy/institute for the much-needed modern digital
                                skill set for today???s digital marketing and e-commerce business.</p>


                            <div>
                                <p className='text-4xl font-bold py-4 flex text-sky-600'>Mission Statement</p>
                            </div>
                            <p className='text-lg md:text-lg py-6 text-slate-900'>To create massive job opportunities 
                            for Nigerians both young and old through our training programs in digital marketing and e-commerce.</p>
                            {/* <div className='text-2xl'>
                <p className='flex py-4'>Lorem, ipsum dolor.</p>
                <p className='flex py-4'>Lorem, ipsum dolor.</p>
                <p className='flex py-4'>Lorem, ipsum dolor.</p>
                <p className='flex py-4'>Lorem, ipsum dolor.</p>
                <p className='flex py-4'>Lorem, ipsum dolor.</p>
                <button className='w-full py-4 my-4'>Get Started</button>
            </div> */}
                        </div>

                        <div className='grid md:grid-cols-3 gap-1 px-2 text-center mt-20'>
                            <div className='border py-8 rounded-xl shadow-xl' >
                                <p className='text-4xl font-bold text-indigo-600'>Partners</p>
                                {/* <p className='text-gray-400 mt-2'>Completion</p> */}
                            </div>
                            <div className='border py-8 rounded-xl shadow-xl' >
                                <p className='text-4xl font-bold text-indigo-600'>Students</p>
                                {/* <p className='text-gray-400 mt-2'>Delivery</p> */}
                            </div>
                            <div className='border py-8 rounded-xl shadow-xl' >
                                <p className='text-4xl font-bold text-indigo-600'>Achievements</p>
                                {/* <p className='text-gray-400 mt-2'>Transactions</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}


export default About;