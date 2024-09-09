import React, { useState } from 'react'
import Button from './Button'
import { motion } from 'framer-motion'

function Product({value,mover,index}) {
  const [bgColor, setBgColor] = useState();

  const handleMouseOver = () => {
    setBgColor(value.bg);
  };
  const handleMouseLeave = () => {
    setBgColor(''); // Reset to your initial color
  };
  return (
    <motion.div   className={`w-full  py-20 h-[20rem] max-[700px]:h-[30rem] transition duration-500 px-4 `} style={{ backgroundColor: bgColor }}>
        <div onMouseOver={()=>{mover(index),handleMouseOver()}} onMouseLeave={handleMouseLeave} className="max-w-screen-xl mx-auto flex items-center justify-between max-[700px]:flex-col max-[700px]:gap-6">
            <h1 className='text-6xl capitalize font-medium'>{value.title}</h1>
            <div className='w-1/3 max-[700px]:w-full '>
                <p className='mb-10'>{value.description}</p>
                <div className='flex gap-5 w-full max-[700px]:items-center'>
                    
                {value.live && (<Button title="Live Website"/>)}
                {value.case && (<Button title="Case Study"/>)}
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default Product