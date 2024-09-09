import { motion } from 'framer-motion';
import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

function Card({width,contact,para,hover="false"}) {
  return (
    <motion.div whileHover={{backgroundColor:hover=="true" && "#7443FF", padding:"25px"}} className={`${width} h-[60vh] bg-zinc-800 rounded-xl p-5 flex flex-col justify-between`}>
        <div className='w-full'>
        <div className=' w-full top flex justify-between items-center'>
            <h2>Get In Touch</h2>
            <IoIosArrowRoundForward className='text-xl'/>
        </div>
            <h2 className='text-3xl font-medium mt-4'>Lets get to it, together</h2>
        </div>
        
        
        {contact && (
            <>
            <h1 className='text-8xl font-medium mt-28 tracking-none tracking-tight'>Start a Project</h1>
            <button className='px-6 py-3 rounded-full border-[1px] mt-4 w-fit'>Contact us</button>
            </>
            )}
            {para && (<p className='text-sm text-zinc-300 mt-5'>Explore what drives our team.</p>)}
        
        
    </motion.div>
  )
}

export default Card