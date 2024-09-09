import React from 'react'

function Footer() {
  return (
    <div className='w-full mt-10'>
        <div className="max-w-screen-xl mx-auto py-10 flex gap-32">
            <div className="basis-1/2">
            <h1 className='text-[10rem] font-medium leading-none tracking-tight '>refokus.</h1></div>
            <div className="basis-1/2 flex gap-14">
                <div>
                    <h4 className='mb-10 text-zinc-500'>Socials</h4>
                    {["instagram","twitter (x?)","Linkedin"].map((item,index)=><a key={index} className='block mt-2 capitalize text-zinc-600' href="">{item}</a>
                    )}
                </div>
                <div>
                    <h4 className='mb-10 text-zinc-500'>Socials</h4>
                    {["instagram","twitter (x?)","Linkedin"].map((item,index)=><a key={index} className='block mt-2 capitalize text-zinc-600' href="">{item}</a>
                    )}
                </div>
                <div className='basis-1/2 flex flex-col items-end'>
                    <p className='text-sm text-zinc-300 text-right'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste neque repellat cupiditate blanditiis laboriosam officia assumenda dicta laborum debitis vel.</p>
                    <img src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/6637ba0d8481b4339b1cda4f_Frame%2048097733.svg" alt="" className='mt-5'/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Footer