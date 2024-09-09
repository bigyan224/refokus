import React from 'react'
import Button from './Button'
import { CiMenuFries } from "react-icons/ci";
function Navbar() {
  return (
    <>
    <div className='sticky z-50 top-0 py-4 w-full m-auto flex items-center justify-between  border-zinc-100 px-24 max-[945px]:hidden bg-black'>
      <div className='nleft flex items-center'>
        <img src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
        <div className="links flex gap-14 ml-20">
          {["Home","Work","Culture","","News"].map((e,index)=>(
            e.length==0 ? <span key={index} className='w-[2px] h-6 bg-zinc-500'></span>:
            
            <a key={index} className='text-sm flex items-center gap-1 font-regular' href="">
              {index == 1 && <span style={{boxShadow:"0 0 0.25em #00FF19"}} className='inline-block w-1 h-1 bg-[#00FF19] rounded-full shadow-[0 0 0.25em #00FF19]'></span>}
              {e}
              </a>
          ))}
        </div>
        </div>
        <Button/>
    </div>
    <div className='bg-black fixed top-0 z-50 py-4  w-screen m-auto flex items-center justify-between  border-zinc-100 px-4 min-[945px]:hidden'>
      <div className='nleft flex items-center'>
        <img src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
        
        </div>
        <div className='p-2 rounded-full bg-white text-black'><CiMenuFries className='text-xl'/></div>
        
    </div>
    </>
  )
}

export default Navbar