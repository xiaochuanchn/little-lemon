import React from 'react';
import { motion } from "framer-motion";
import { NavLink } from 'react-router-dom';
import {navLinkDatas} from '../../constants';

const NavLinks = (props) => {
  const animateFrom = {opacity: 0, y: -40}
  const animateTo = {opacity: 1, y: 0}
  return (
    <motion.ul className="menu-items" initial={animateFrom} animate={animateTo} transition={{delay: 0.05}}>
      {navLinkDatas.map(({id,title,path}) => {
    return (
    <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{delay: 0.05}}
        onClick={() => props.isMobile && props.closeMobileMenu()}
        key={id}
        >
          <NavLink to={path} className="active-links">{title}</NavLink>
      </motion.li> 
      )
  })}
    </motion.ul>
  )
}

export default NavLinks