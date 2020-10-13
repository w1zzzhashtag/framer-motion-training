import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'

import Loader from './Loader'

const containerVariants = {
  hidden: {
    opacity: 0, 
    x: 100
  },
  visible: {
    opacity: 1, 
    x: 0,
    transition: {
      type: 'spring',
      delay: 1.5,
      duration: 1.5
    }
  },
  exit: {
    x: '-100vw',
    transition: {ease: 'easeInOut'}
  }
}

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: '0px 0px 8px rgba(255,255,255,1)',
    boxShadow: '0px 0px 8px rgba(255,255,255,1)',
    transition: {
      yoyo: Infinity
    }
  }
}

const Home = () => {
  return (
    <motion.div 
      className="home container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>
        Welcome to Pizza Joint
      </h2>
      <Link to="/base">
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap={{scale: .9}}
        >
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader />
    </motion.div>
  )
}

export default Home;