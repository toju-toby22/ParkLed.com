import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline"
import {Link} from "react-router-dom"


function Navbar() {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    return (
        <div className='w-screen h-[80px] bg-zinc-200 fixed drop-shadow-lg'>
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex  items-center'>
                   <Link to="/"> <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>
                        PARKLADE DIGITAL ACADEMY
                    </h1></Link>
                    <ul className='hidden shift md:flex '>
                       <Link to="/"><li>Home</li></Link> 
                        <Link to="/courses"><li>Courses</li></Link>
                        <Link to="/about"><li>About</li></Link>
                        <Link to="/contact"><li>Contact</li></Link>
                    </ul>
                </div>

                <div className='hidden md:flex'>
                    <button className='sign border-none bg-transparent text-black mr-6'>
                        Sign In
                    </button>
                    <button className='sign px-8 py-3 mr-6'>
                        Sign Up
                    </button>
                </div>
                <div className='md:hidden' onClick={handleClick}>
                    {!nav ? <MenuIcon className="w-5 " /> : <XIcon className='w-5' />}

                </div>
            </div>

            <ul className={!nav ? "hidden" : 'absolute bg-zinc-200 w-full px-8'}>
               <Link to="/"> <li className='border-b-2 border-zinc-300 w-full'>Home</li></Link>
               <Link to="/courses"> <li className='border-b-2 border-zinc-300 w-full'>Courses</li></Link>
                <Link to="/about"><li className='border-b-2 border-zinc-300 w-full'>About</li></Link>
                <Link to="/contact"><li className='border-b-2 border-zinc-300 w-full'>Contact</li></Link>

                <div className='flex flex-col my-4'>
                    <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>Sign In</button>
                    <button className='px-8 py-3'>Sign Up</button>
                </div>
                
            </ul>

        </div>
    );
}


export default Navbar;