import { motion } from 'framer-motion'
import React from 'react'

function Stripe({val,data}) {
  return (
    data.map((item,index)=>{
      return  <motion.div  className='w-[15rem] px-4 py-5 border-r-[1px] border-t-[1px] border-b-[1px] border-zinc-500 flex justify-around items-center mt-20 flex-shrink-0'>
      <img src={item.url} alt="" />
      <span>{item.number}</span>
    </motion.div> 
      
    })
      
    
    
  )
}

export default Stripe