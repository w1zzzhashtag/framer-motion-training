import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '-100vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      delay: .5
    }
  },
  exit: {
    x: '-100vw',
    transition: {ease: 'easeInOut'}
  },
  hover: {
    color: '#f8e112',
    scale: 1.5,
    originX: -.1
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

const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  return (
    <motion.div 
      className="toppings container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li 
              key={topping} 
              onClick={() => addTopping(topping)}
              variants={containerVariants}
              whileHover="hover"
            >
              <span className={spanClass}>{ topping }</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/order">
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
        >
          Order
        </motion.button>
      </Link>

    </motion.div>
  )
}

export default Toppings;