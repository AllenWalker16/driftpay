'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import BgImg from '../public/5432755.jpg';
import styles from '../styles';
import { slideIn, fadeIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:p-16 p-6 flex items-center`}>
    <div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col -mt-10`}
      >
        {/* <img src="../public/joyful-black-author-works-writing-new-book-readers.jpg" alt="" className="blur-sm opacity-30 h-full w-full object-cover object-center" /> */}
        <Image
          variants={fadeIn('down', 'tween', 0.2, 1)}
          src={BgImg}
          alt="logo"
          className="w-full absolute object-cover left-0"
        />
        <div className="w-full h-[5px] gradient-02 rounded-tl-[140px] rounded-br-[140px] z-0 -top-[30px]" />
        <div className="flex flex-col text-primary w-full h-full relative object-contain">
          <motion.h1
            variants={textVariant(1.1)}
            className={`mt-4 ${styles.heroHeading}`}
          >
            Earn & Save
            <br />
            easier with
          </motion.h1>
          <motion.div
            variants={textVariant(1.2)}
            className="flex items-center"
          >
            <div className={`border-blue-500 ${styles.heroDText}`} />
            <h1 className={styles.heroHeading}>rift</h1>
          </motion.div>
        </div>
        <p className="relative sm:mt-8 mt-2 tracking-wide text-sm sm:text-[16px]">Drift prioritizes simplicity and flexibility <br /> that make each of your transactions more stylish</p>
        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className="relative w-full mt-10"
        >
          <div href=" #explore" className=" -mt-4 md:-mt-0 -skew-x-12 bg-blue-400 py-5 px-2 w-[150px] rounded-sm font-bold border-none cursor-pointer transition ease-out duration-500  hover:text-black hover:bg-blue-500 text-sm text-center">Get Started</div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
