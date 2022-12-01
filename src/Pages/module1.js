import React from "react"
import Navbar from "../Components/Nav-bar"
import Footer from "../Components/footer"
import supportImg from '../Assets/cyber-bg.png'
import { MdFiberManualRecord } from "react-icons/md";


function module1() {
    return (
        <>
            <div>
                <Navbar />
            </div>


            <div name='support' className='w-full py-20'>
                <div className='w-full h-[700px] bg-gray-900/90 absolute'>
                    <img className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt="/" />
                </div>

                <div className='max-w-[1240px] mx-auto text-white relative'>
                    <div className='px-4 py-12'>
                        <h2 className='text-4xl font-bold py-3 text-center'>Module PD01</h2>
                        <h3 className='text-4xl text-center'>Foundational Digital Marketing</h3>
                    </div>
                </div>
            </div>


            <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
                <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Premium</span>
                <div>
                    <p className='text-4xl font-bold py-4 flex'>Module PD01</p>
                </div>
                <p className='text-3xl md:text-lg py-6 text-slate-900 font-semibold'>This is a foundational training in
                    digital marketing and e-commerce for beginners.  The curriculum for this program is structured
                    to help our student acquire practical and in-depth knowledge. At the completion of this module,
                    participants can deploy their competence in researching and finding winning products, create landing pages,
                    provide catchy
                    products description and deliver efficient customer services
                    to potential customers for e-commerce online stores. </p>
                <div className='text-3xl md:text-lg text-slate-600'>
                    <p className='flex items-center py-4'><MdFiberManualRecord className='h-6 text-indigo-900 mr-3' /> Introduction to Computer and Internet</p>
                    <p className='flex items-center py-4'><MdFiberManualRecord className='h-6 text-indigo-900 mr-3' /> Product Research</p>
                    <p className='flex items-center py-4'><MdFiberManualRecord className='h-6 text-indigo-900 mr-3' /> Algorithm Sheets</p>
                    <p className='flex items-center py-4'><MdFiberManualRecord className='h-6 text-indigo-900 mr-3' /> Product Description.</p>
                    <p className='flex items-center py-4'><MdFiberManualRecord className='h-6 text-indigo-900 mr-3' /> Landing Pages</p>
                    <p className='flex items-center py-4'><MdFiberManualRecord className='h-6 text-indigo-900 mr-3' /> Customer Service</p>
                    <button className='w-full py-4 my-4'>Get Started</button>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default module1;