'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import { useState } from 'react';
import logo from '../public/drift.png';
import styles from '../styles';
import { navVariants, fadeIn } from '../utils/motion';
import { navLinks } from '../constants';

const Navbar = () => {
  const [Toggle, setToggle] = useState(false);
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-1/2 inset-0 gradient-01" />
      <div className={`${styles.innerWidth} flex mx-auto justify-between gap-8`}>
        <div className="w-full h-full flex">
          <Image
            variants={fadeIn('down', 'tween', 0.2, 1)}
            src={logo}
            alt="logo"
            className="w-[100px] object-contain flex items-center -mt-3"
          />
          <h2 className="font-extrabold text-[24px] leading-[30px] -ml-6"> Drift </h2>
        </div>
        {/* navigation for mobile devices */}
        <div className="md:hidden flex justify-end items-center w-full">
          {Toggle ? <IoMdClose className="w-[28px] h-[28px] object-contain" onClick={() => setToggle((prev) => !prev)} /> : <IoMdMenu className="w-[28px] h-[28px] object-contain" onClick={() => setToggle((prev) => !prev)} />}
          <div className={`${Toggle ? 'flex' : 'hidden'} p-6 bg-gray-900 bg-opacity-30 absolute z-10 top-16 right-0 m-4 my-2 min-w-[140px]`}>
            <ul className="text-white text-xs justify-start list-none flex-1 items-center flex flex-col">
              {navLinks.map((nav) => (
                <li key={nav.id} className="text-xs tracking-widest font-semibold cursor-pointer mb-4">
                  <a href={`#${nav.id}`}>
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <ul className="relative z-10 hidden justify-start list-none flex-1 items-center md:flex gap-10">
            {navLinks.map((nav) => (
              <li key={nav.id} className="text-xs tracking-widest font-extrabold cursor-pointer mb-4">
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};
export default Navbar;
