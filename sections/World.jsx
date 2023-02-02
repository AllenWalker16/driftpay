'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title=" | Transaction without borders"
        textStyles="text-center"
      />
      <TitleText
        title={(
          <>
            Send & Receieve funds from anywhere accross the world without hitch or restrictions
          </>
      )}
        textStyles="text-center"
      />
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img
          src="/map.png"
          alt="map"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-20 right-20 h-[70px] w-[70px] p-[6px] rounded-full bg-[#5d6680] glassmorphism">
          <img src="people-01.png" alt="person1" className="w-full h-full" />
        </div>
        <div className="absolute top-10 left-20 h-[70px] w-[70px] p-[6px] rounded-full bg-[#5d6680] glassmorphism">
          <img src="people-02.png" alt="person1" className="w-full h-full" />
        </div>
        <div className="absolute top-1/2 left-[40%] h-[70px] w-[70px] p-[6px] rounded-full bg-[#5d6680] glassmorphism">
          <img src="people-03.png" alt="person1" className="w-full h-full" />
        </div>

      </motion.div>

    </motion.div>
  </section>
);

export default World;
