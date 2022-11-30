import React from "react";
import Navbar from "../Components/Nav-bar"
// import { CheckIcon } from '@heroicons/react/outline';
import supportImg from '../Assets/cyber-bg.png'
import download from '../Assets/download.jpg'
import marketing from '../Assets/marketing.jpg'
import { RiNumber1, RiNumber2 } from "react-icons/ri";


function Courses() {
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
            <h3 className='text-5xl font-bold py-6 text-center'>Our Courses</h3>
            <p className='py-4 text-center text-3xl text-slate-300'>
              Parklade Digital Academy provides the skill sets required to participate and
              compete in the 21st-century digital marketing and e-commerce industry.
              Our curriculum is strategically structured to deliver practical and
              personalized hands-on training to our students.</p>
          </div>
        </div>
      </div>



      <div>
        <div name='platforms' className='w-full py-32 mt-20 md:mt-20'>
          <div className='max-w-[1240px] mx-auto px-2'>
            <h2 className='text-5xl font-bold text-center'>Introduction To Modules</h2>
            <p className='text-2xl py-8 text-gray-500 text-center'>
              Digital Marketing courses for; E-commerce Virtual Assistants and Startup E-commerce Entrepreneurs
            </p>

            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-20 pt-4'>

              <div className='flex flex-col justify-center items-center text-center bg-zinc-200
                           border border-slate-300 rounded-xl shadow-xl p-auto m-auto '>
                <div>
                  <RiNumber1 className='h-[50px] w-7  text-indigo-600' />
                </div>
                <div className="p-3">
                  <h3 className='font-bold text-lg mt-2'>Foundational Digital Marketing</h3>
                  <img className='w-full h-[200px] object-cover mt-3' src={download} alt="/" />

                  {/* <p className='text-lg pt-2 pb-4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores maxime deserunt voluptatibus consequatur similique
                    voluptates!
                  </p> */}
                </div>
              </div>


              <div className='flex flex-col justify-center items-center text-center bg-zinc-200
                           border border-slate-300 rounded-xl shadow-xl p-auto m-auto '>
                <div>
                  <RiNumber2 className='h-[50px] w-7 text-indigo-600' />
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
              </div>

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
    </>
  );
}


export default Courses;