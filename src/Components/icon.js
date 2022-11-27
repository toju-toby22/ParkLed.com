import React from "react"
import {CloudUpLoadIcon,Database,PaperAirplaneICon,ServerIcon} from '@heroicons/react/solid'


function Icon () {
    return(
        <div className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
            <div className='grid md:grid max-w-[1240px] m-auto'>
                <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                    <p className='text-2xl'>Unique training on E-commerce</p>
                    <h1 className='py-3 text-5xl md:text-7xl font-bold'>Digital Marketing</h1>
                    <p className='text-2l'>The Future of E-commerce</p>
                    <button className='py-3 px-6 sm:w[60%] my-4'>Apply Here</button>
                </div>
            </div>
        </div>
    )
}


export default Icon;