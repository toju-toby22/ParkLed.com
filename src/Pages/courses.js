import React from "react";
import Navbar from "../Components/Nav-bar"
// import { CheckIcon } from '@heroicons/react/outline';
import supportImg from '../Assets/cyber-bg.png'
import download from '../Assets/download.jpg'
import marketing from '../Assets/marketing.jpg'
// import { RiNumber1, RiNumber2 } from "react-icons/ri";
import Footer from "../Components/footer"
import { Link } from "react-router-dom"


function Courses() {
  return (
    <>
      <div>
        <Navbar />
      </div>


      <div name='support' className='w-full py-20'>
        <div className='w-full h-[300px] bg-gray-900/90 absolute'>
          <img className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt="/" />
        </div>

        <div className='max-w-[1240px] mx-auto text-white relative'>
          <div className='px-4 py-8'>
            <h2 className='text-5xl font-bold py-4 text-center'>Our Courses</h2>
            <p className='py-2 text-center text-lg text-slate-300'>
              Our courses are practical ands hands-on. We have lively interactive sessions between participants
              as well as master minds delivery where startup entrepreneur can learn from the experiences of
              online entrepreneurs</p>
          </div>
        </div>
      </div>



      <div className="pt-5">
        <div name='platforms' className='w-ful'>
          <div className='max-w-[1240px] mx-auto px-2'>
            <div className='grid sm:grid-cols-2 lg:grid-cols-2 gap-20'>
              <Link to="/module1">
                <div className='flex flex-col justify-center items-center text-center bg-zinc-200
                           border border-slate-300 rounded-xl shadow-xl p-auto m-auto '>
                  <div>
                    <h3 className='font-bold text-lg'>Module PD01</h3>
                  </div>
                  <div className="p-3">
                    <h3 className='font-bold text-lg'>Foundational Digital Marketing</h3>
                    <img className='w-full h-[200px] object-cover mt-3' src={download} alt="/" />

                    {/* <p className='text-lg pt-2 pb-4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores maxime deserunt voluptatibus consequatur similique
                    voluptates!
                  </p> */}
                  </div>
                </div></Link>

                <Link to="/module2">
              <div className='flex flex-col justify-center items-center text-center bg-zinc-200
                           border border-slate-300 rounded-xl shadow-xl p-auto m-auto '>
                <div>
                  <h3 className='font-bold text-lg'>MODULE PD02</h3>
                </div>
                <div className="p-3">
                  <h3 className='font-bold text-lg'>Advanced Digital Marketing</h3>

                  <img className='w-full h-[200px] object-cover mt-3' src={marketing} alt="/" />


                  {/* <p className='text-lg pt-2 pb-4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores maxime deserunt voluptatibus consequatur similique
                    voluptates!
                  </p> */}
                </div>
              </div></Link>



            
              <Link to="/">
              <div className='flex flex-col justify-center items-center text-center bg-zinc-200
                           border border-slate-300 rounded-xl shadow-xl p-auto m-auto '>
                <div>
                <p className='text-xl text-center'>Coming Soon...</p>
                </div>
                <div className="p-3">
                  <h3 className='font-bold text-lg'>Social Media Marketing (MMM)</h3>

                  <img className='w-full h-[200px] object-cover mt-3' src={marketing} alt="/" />


                  {/* <p className='text-lg pt-2 pb-4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores maxime deserunt voluptatibus consequatur similique
                    voluptates!
                  </p> */}
                </div>
              </div></Link>




              {/* <div className='flex flex-col justify-center items-center text-center bg-zinc-200
                           border border-slate-300 rounded-xl shadow-xl p-auto m-auto '>
                <div>
                  <FaFacebookF className='h-[100px] w-7 mr-4 text-indigo-600' />
                </div>
                <div>
                  <h3 className='font-bold text-lg'>Facebook Advertising</h3>
                  <p className='text-lg pt-2 pb-4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores maxime deserunt voluptatibus consequatur similique
                    voluptates!
                  </p>
                </div>
              </div>


              <div className='flex flex-col justify-center items-center text-center bg-zinc-200
                           border border-slate-300 rounded-xl shadow-xl p-auto m-auto '>
                <div>
                  <FaFacebookF className='h-[100px] w-7 mr-4 text-indigo-600' />
                </div>
                <div>
                  <h3 className='font-bold text-lg'>Facebook Advertising</h3>
                  <p className='text-lg pt-2 pb-4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores maxime deserunt voluptatibus consequatur similique
                    voluptates!
                  </p>
                </div>
              </div> */}



            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}


export default Courses;