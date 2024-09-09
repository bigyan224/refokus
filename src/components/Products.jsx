import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";
import vid1 from "../assets/Singularity Promo 4_3 2024.webm";
import vid2 from "../assets/Cula_promo_new_4_3.mp4";
import vid3 from "../assets/showcase_4_3.mp4";
import vid4 from "../assets/webflow-education-promo.mp4";
import vid5 from "../assets/Maniv-Compressed.mp4";

function Products() {
  let products = [
    {
      title: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
      bg: "#4C20CF",
    },
    {
      title: "Cula",
      description:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      live: true,
      case: false,
      bg: "#4A576B",
    },
    {
      title: "Layout Land",
      description:
        "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
      live: true,
      case: false,
      bg: "#FE9F2E",
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      case: true,
      bg: "#1626F3",
    },
    {
      title: "Maniv",
      description:
        "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
      live: true,
      case: true,
      bg: "#2DCB76",
    },
  ];

  const [pos, setpos] = useState(0);
  const mover = (value) => {
    setpos(value * 20);
    
  };

  return (
    <div className="bg-inherit mt-32 relative">
      {products.map((elem, index) => (
        <Product key={index} mover={mover} value={elem} index={index} />
      ))}
      <div className="w-full h-full absolute top-0 pointer-events-none ">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + "rem" }}
          transition={{
            ease: "linear",
            duration: 0.5,
          }}
          className=" window absolute w-[30rem] h-[20rem] bg-white rounded-lg -translate-x-[50%] left-[44%] overflow-hidden"
        >
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full "
          >
            <video
              autoPlay
              loop
              muted
              src={vid1}
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full"
          >
            <video
              autoPlay
              loop
              muted
              src={vid2}
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos+ "rem" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full "
          >
            <video
              autoPlay
              loop
              muted
              src={vid3}
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full "
          >
            <video
              autoPlay
              loop
              muted
              src={vid4}
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full "
          >
            <video
              autoPlay
              loop
              muted
              src={vid5}
            ></video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
