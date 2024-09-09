import { motion } from 'framer-motion'
import React from 'react'

function Marquee({imagesurl,direction}) {
  return (
    <div className='flex w-full  whitespace-nowrap overflow-hidden'>
      <motion.div initial={{x:direction=="left"?"0":"-100%"}} animate={{x:direction=="left"?"-100%":"0"}} transition={{ease:"linear",duration:15,repeat:Infinity}} className='flex gap-20 flex-shrink-0 py-10 pr-20'>
      {imagesurl.map((url,index) => <img key={index} src={url} className=''/>)}
      </motion.div>
      <motion.div initial={{x:direction=="left"?"0":"-100%"}} animate={{x:direction=="left"?"-100%":"0"}} transition={{ease:"linear",duration:15,repeat:Infinity}} className='flex gap-20 flex-shrink-0 py-10 pr-20'>
      {imagesurl.map((url,index) => <img key={index} src={url} className=''/>)}
      </motion.div>
     
      
        
        
    </div>
  )
}

export default Marquee