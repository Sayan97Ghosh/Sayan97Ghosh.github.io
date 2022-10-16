import React from 'react'
import dp from "../assets/dp.jpeg";
import {IoIosArrowForward} from "react-icons/io";
function Home() {
  return (
    <div name = "home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800  
   
    
    '>
       <div className="max-w-screen-lg mx-auto flex flex-col  items-center justify-center h-full px-4 md:flex-row">
           <div className="flex flex-col justify-center h-full">
                <h3 className='text-4xl sm:text-5xl font-bold text-white'>👋I'm Sayan Ghosh </h3>
                <h3 className='text-4xl sm:text-6xl font-bold text-white'> Full Stack Web Developer</h3>
                <p className='text-gray-500 py-4 max-w-md'>
                    I have 1 year of experience building and designing software.
                    Currently ,I love to work on web applications using technologies like
                    React,Tailwind,Next Js and Mongo DB 
                </p>
                <div>
                    <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor pointer'>
                        About
                        <span className='group-hover:rotate-90 duration-300'>
                            <IoIosArrowForward size={18}
                            className = "ml-3"/>
                        </span>
                    </button>
                </div>
           </div>
           <div>
            <img style={{height:"350px",width:"650px"}} src={dp} alt="" 
            className='rounded-3xl mx-auto w-2/3 md:w-80'/>
           </div>
       </div>
    </div>
  )
}

export default Home