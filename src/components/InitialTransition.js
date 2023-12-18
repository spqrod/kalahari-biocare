import { motion } from "framer-motion";
import "../styles/global.css";
import { useEffect } from "react";
  
export const InitialTransition = () => {

    useEffect(() => {
        const whiteBoxContainer = document.querySelector(".whiteBoxContainer");
        setTimeout(() => whiteBoxContainer.style.display = "none", 1000);
    }, []);

    const whiteBox = {
        initial: {
            height: "100vh",
            bottom: 0,
        },
        animate: {
            height: "0",    
            transition: {
            duration: 0.5,
            ease: [0.87, 0, 0.13, 1],
            },
        },
    };

    return (
      <div className="whiteBoxContainer">
        <motion.div
          className="whiteBox"
          initial="initial"
          animate="animate"
        variants={whiteBox}
        />      
      </div>
    );
  };