'use client';

import { motion } from 'framer-motion';
import { HiArrowLongDown } from 'react-icons/hi2';
import styles from '../styles';
import { TypingText } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Drift" textStyles="text-center" />
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-black"
      >
        <span className="font-extrabold tracking-wider">Drift</span> is an innovative electronic payment, collection and remittance solutions and services in a <span className="font-extrabold">secure, reliable and cost-effective manner</span> to businesses and consumers across various channels.
      </motion.p>

      <HiArrowLongDown className="mt-6" />

    </motion.div>
  </section>
);

export default About;
