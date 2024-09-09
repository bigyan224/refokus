import React, { useState } from "react";
import {motion, useMotionValueEvent,useScroll } from "framer-motion"

function Work() {
  const [images, setimages] = useState([
  
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "50%",
      left: "50%",
      isActive: false,
    },

    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "53%",
      left: "40%",
      isActive: false,
    },

    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "47%",
      left: "58%",
      isActive: false,
    },

    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "40%",
      left: "49%",
      isActive: false,
    },

    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "60%",
      left: "50%",
      isActive: false,
    },

    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "66%",
      left: "42%",
      isActive: false,
    },
  ]);

  const { scrollY,scrollYProgress } = useScroll()

useMotionValueEvent(scrollYProgress, "change", (latest) => {
  
  function showimages(arr){
    setimages((prev)=>
      prev.map((item,index)=>
      arr.indexOf(index)===-1?{...item, isActive:false}:
      {...item, isActive:true}
      )
    )
  }
  switch (Math.floor(latest*100)){

    case 0:
      showimages([]);
      break;
      
    case 1:
      showimages([0]);
      break;
    
    case 2:
      showimages([0,1]);
      break;
    
    case 4:
      showimages([0,1,2]);
      break;
    
    case 6:
      showimages([0,1,2,3]);
      break;
    
    case 7:
      showimages([0,1,2,3,4]);
      break;
    
    case 8:
      showimages([0,1,2,3,4,5]);  
      break;
    
    case 9:
      showimages([0,1,2,3,4,5,6]);
    
    }
})



  return (
    <div className="w-full max-[800px]:h-[80vh] flex items-center justify-center">
      <div className="relative max-w-screen-xl mx-auto text-center">
        <h1 className="text-[30vw] font-medium select-none leading-none tracking-tight max-[800px]:text-[40vw] max-[700px]:hidden mt-4">
          work
        </h1>
        <div className="h-full w-full text-[25vh] font-medium leading-[0.6] tracking-[30px] select-none -rotate-90 p-2 flex flex-col items-center justify-center line-clamp-none min-[700px]:hidden mt-4 pr-12">
          <h1>work</h1>
          <h1>work</h1>
          <h1>work</h1>
        </div>
        <div className="absolute w-full h-full top-0 ">
          {images.map(
            (elem, index) =>
              elem.isActive && (
                <img key={index}
                  style={{ top: elem.top, left: elem.left }}
                  className="w-64 rounded-lg absolute -translate-x-[50%] -translate-y-[50%]"
                  src={elem.url}
                  alt=""
                />
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default Work;
