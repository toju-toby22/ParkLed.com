import React from "react";
import Navbar from "../Components/Nav-bar"
import img2 from "../Assets/images.png"
import { CloudDownloadIcon, DatabaseIcon, PaperAirplaneIcon } from "@heroicons/react/solid";

function Homepage() {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div className='w-full h-screen bg-zinc-100 flex flex-col justify-between'>
                <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
                    <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                        <p className='text-2xl'>Unique training on E-commerce</p>
                        <h1 className='py-3 text-5xl md:text-7xl font-bold'>Digital Marketing</h1>
                        <p className='text-2l'>The Future of E-commerce</p>
                        <button className='py-3 px-6 sm:w[60%] my-4'>Apply Here</button>
                    </div>
                    <div>
                        <img className='w-full' src={img2} alt=""/>
                    </div>


                    <div className='absolute flex flex-col py-8 md:min-w-[750px] bottom-[5%]
                    mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
                    borde border-slate-300 rounded-xl text-center shadow-xl'>
                        <p>Courses</p>
                        <div className='flex justify-between flex-wrap px-4'>
                            <p className="flex px-4 py text-slate-500"><CloudDownloadIcon className='h-6 text-indigo-600'/>Product Research</p>
                            <p className="flex px-4 py text-slate-500"><PaperAirplaneIcon className='h-6 text-indigo-600'/>Product Research</p>
                            <p className="flex px-4 py text-slate-500"><DatabaseIcon className='h-6 text-indigo-600'/>Product Research</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Homepage;