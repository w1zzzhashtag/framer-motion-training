import React from 'react';
import {motion} from 'framer-motion'
import { NavLink } from 'react-router-dom';


const svgVariants = {
  hidden: { rotate: -180 },
  visible: { 
    rotate: 0,
    transition: { duration: 1 } 
  }
}

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: { 
      duration: 2,
      ease: 'easeInOut' 
    } 
  }
}

const Header = () => {
  return (
    <header>
      <motion.div className="logo"
        drag
        dragConstraints={{left:0, top:0, right:0, bottom:0}}
      >
        <motion.svg 
          className="pizza-svg" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 100 100"
          variants={svgVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.path
            variants={pathVariants}
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
          />
          <motion.path
            variants={pathVariants}
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
          />
        </motion.svg>
      </motion.div>
      <motion.div 
        className="title"
        exit={{y: -100, opacity: 0}}
        initial={{y: -100, opacity: 0}}
        animate={{y: 0, opacity: 1}}
      >
        <h1><NavLink to="/">Pizza Joint</NavLink></h1>
      </motion.div>
    </header>
  )
}

export default Header;