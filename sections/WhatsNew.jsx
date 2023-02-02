'use client';

import { motion } from 'framer-motion';

import Image from 'next/image';
import WhatsNewImg from '../public/whats-new.png';
import styles from '../styles';
import { TitleText, TypingText, NewFeatures } from '../components';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import { newFeatures } from '../constants';

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-03 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText
          title=" | Whats New"
        />
        <TitleText
          title={<>Whats New about Drift</>}
        />
        <div
          className="mt-[48px] flex flex-wrap justify-between gap-[24px]"
        >
          {newFeatures.map((feature) => (
            <NewFeatures
              key={feature.title}
              {...feature}
            />
          ))}
        </div>
      </motion.div>
      <motion.div
        variants={planetVariants('left')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <Image
          src={WhatsNewImg}
          alt="get-Started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;