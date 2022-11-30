import React from "react";
import Navbar from "../Components/Nav-bar"
import Footer from "../Components/footer"



function About() {
    return (
        <>
            <div>
                <Navbar />

                <div name='about' className='w-full py-32'>
                    <div className='max-w-[1240px] mx-auto'>
                        <div className='text-center'>
                            <h2 className='text-5xl font-bold'>About Parklade</h2>
                            <div className="text-center bg-zinc-200
                           border border-slate-300 rounded-xl shadow-xl p-auto m-auto mt-10">
                                <p className='text-3xl py-6 text-black-500'>
                                    Parklade Digital Academy is a Digital Marketing and e-commerce training hub.
                                    We are strategically established to produce skillful Virtual Assistants for the increasing
                                    booming online e-commerce stores. We also create and develop capacities in entrepreneurship
                                    by training new startup online e-commerce entrepreneurs</p>

                                <p className='text-3xl py-6 text-black-500'>
                                    We have partnered with foreign digital marketing interest to ensure that PDA enjoys technical
                                    support for the success of her programs. Locally too, we have been reaching out with local
                                    indigenous institutions who are set up to promote capacity building in entrepreneurship
                                    especially in the digital marketing industry.</p>

                                <p className='text-3xl py-6 text-black-500'>
                                    Our trainers are digital marketing experts with several years of experience both in
                                    training and running e-commerce stores for online business owners.</p>
                            </div>
                        </div>




                        <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative mt-20'>
                            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Premium</span>
                            <div>
                                <p className='text-6xl font-bold py-4 flex'>Our Vision</p>
                            </div>
                            <p className='text-3xl py-6 text-slate-900'>To be the go-to academy/institute for the much-needed modern digital
                                skill set for today’s digital marketing and e-commerce business.</p>


                            <div>
                                <p className='text-6xl font-bold py-4 flex text-sky-600'>Mission Statement</p>
                            </div>
                            <p className='text-3xl py-6 text-slate-900'>To deliver cutting-edge and up-to-date digital
                             solutions for online e-commerce businesses.</p>
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
                                <p className='text-6xl font-bold text-indigo-600'>100%</p>
                                <p className='text-gray-400 mt-2'>Completion</p>
                            </div>
                            <div className='border py-8 rounded-xl shadow-xl' >
                                <p className='text-6xl font-bold text-indigo-600'>24/7</p>
                                <p className='text-gray-400 mt-2'>Delivery</p>
                            </div>
                            <div className='border py-8 rounded-xl shadow-xl' >
                                <p className='text-6xl font-bold text-indigo-600'>100K</p>
                                <p className='text-gray-400 mt-2'>Transactions</p>
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