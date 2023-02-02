'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import hs from '../public/headset.svg';
import styles from '../styles';
import { fadeIn } from '../utils/motion';

const ExploreCard = ({ id, imgUrl, title, index, content, active, handleClick }) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${
      active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
    } flex items-center justify-center mid-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <img
      src={imgUrl}
      alt={title}
      className="absolute w-full h-full object-cover rounded-3xl"
    />
    {active !== id ? (
      <div className="absolute rounded-3xl w-full h-full bg-gray-900 bg-opacity-40 flex items-center justify-center">
        <h3 className="font-semibold sm:text-[20px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:-rotate-90 lg:origin-[0,0]">
          {title}
        </h3>
      </div>

    ) : (
      <div className="absolute bottom-0 p-10 justify-center w-full h-full flex-col bg-[rgba(0,0,0,0.5)] rounded-3xl">
        <div className={`${styles.flexCenter} w-[60px] h-[60px] rounded-3xl mb-[16px] glassmorphism`}>
          <Image
            src={hs}
            alt="headset"
            className="w-1/2 h-1/2 object-contain"
          />
        </div>
        <h2
          className="font-semibold sm:text-[32px] text-[24px] text-white"
        >
          {title}
        </h2>
        <p
          className="font-normal text-white sm:[24px} text-{16px] leading-[20px] pb-1 tracking-wider"
        >
          {content}
        </p>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
