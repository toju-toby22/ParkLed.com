import React from "react"
import Navbar from "../Components/Nav-bar"
import Footer from "../Components/footer"
import supportImg from '../Assets/cyber-bg.png'
import { MdFiberManualRecord } from "react-icons/md";


function module2() {
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
                    <p className='text-4xl font-bold py-4 flex'>Module PD02</p>
                </div>
                <p className='text-3xl md:text-lg py-6 text-slate-900 font-semibold'>This program focuses on the
                    application of skills acquired in mod PD01.  Participants will know how to create and manage online
                    e-commerce stores by leveraging on platforms like Shopify and Amazon.
                    They will be resourceful in dropshoping, Ads-copy, Facebook Ads and e-mail marketing.  </p>
                <div className='text-3xl md:text-lg text-slate-600'>
                    <p className='flex items-center py-4'><MdFiberManualRecord className='h-6 text-indigo-900 mr-3' /> Video creation</p>
                    <p className='flex items-center py-4'><MdFiberManualRecord className='h-6 text-indigo-900 mr-3' /> Shopify</p>
                    <p className='flex items-center py-4'><MdFiberManualRecord className='h-6 text-indigo-900 mr-3' /> Dropshipping</p>
                    <p className='flex items-center py-4'><MdFiberManualRecord className='h-6 text-indigo-900 mr-3' /> Ads-Copy</p>
                    <p className='flex items-center py-4'><MdFiberManualRecord className='h-6 text-indigo-900 mr-3' /> Facebook Ads</p>
                    <p className='flex items-center py-4'><MdFiberManualRecord className='h-6 text-indigo-900 mr-3' /> E-Mail Marketing</p>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSeKfdHpZGjl9WG3vMHsxH9GniLcfF9y2wbTCwo-vdhdsAvc7Q/viewform?embedded=true">  <button className='w-full py-4 my-4'>Apply Now</button></a>
                </div>
            </div>
            {/* <div name='support' className='w-full py-20'>
                <div className='w-full h-[700px] bg-gray-900/90 absolute'>
                    <img className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt="/" />
                </div>

                <div className='max-w-[1240px] mx-auto text-white relative'>
                    <div className='px-4 py-12'>
                        <h2 className='text-5xl font-bold py-6 text-center'>Module PD02</h2>
                        <h3 className='text-5xl font-bold py-6 text-center'>Advanced Digital Marketing</h3>
                        <p className='py-4 text-center text-3xl text-slate-300'>
                            Parklade Digital Academy provides the skill sets required to participate and
                            compete in the 21st-century digital marketing and e-commerce industry.
                            Our curriculum is strategically structured to deliver practical and
                            personalized hands-on training to our students.</p>
                    </div>
                </div>
            </div>


        <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Premium</span>
            <div>
              <p className='text-6xl font-bold py-4 flex'>Module PD02</p>
            </div>
            <p className='text-3xl py-6 text-slate-900'>This program focuses on the application of skills acquired in mod PD01.  Participants will know how to create and manage online e-commerce stores by leveraging on platforms like Shopify and Amazon. 
            They will be resourceful in dropshoping, Ads-copy, Facebook Ads and e-mail marketing.  </p>
            <div className='text-3xl text-slate-600'>
                <p className='flex py-4'>Video creation</p>
                <p className='flex py-4'>Shopify</p>
                <p className='flex py-4'>Dropshipping</p>
                <p className='flex py-4'>Ads-Copys</p>
                <p className='flex py-4'>Facebook Ads</p>
                <p className='flex py-4'>E-Mail Marketing</p>
                <button className='w-full py-4 my-4'>Get Started</button>
            </div>
          </div> */}
            <Footer />
        </>
    );
}

export default module2;