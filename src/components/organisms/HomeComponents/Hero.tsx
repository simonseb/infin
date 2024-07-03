'use client';

import React, { useContext } from 'react';
import styles from '../../../styles/components/organisms/Home/Hero.module.scss';

import Image from 'next/image';
import AnimatedText from '../../molecules/AnimatedText';

import { AppContext, IAppContext } from '@/context/app.context';
import { Section } from '../../atoms/Section';
import { Button } from '../../atoms/Button';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Cursor from '@/components/atoms/Cursor';

interface HeroProps { }

export default function Hero({ }: HeroProps) {
  const router = useRouter();
  const { cursorVisibility, setCursorVisibility } = useContext(AppContext) as IAppContext;

  const handleMouseEnter = () => {
    setCursorVisibility('block');
  };

  const handleMouseLeave = () => {
    setCursorVisibility('none');
  };

  return (
    <Section id="home"
      className={styles.hero}
      type="ghost"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <div id='home_wrapper' className={styles.wrapper}>
        <Cursor cursorDisplay={cursorVisibility} />
        <div className={styles.topBlock}>
          <p className={styles.smallText}>
            <span>Web + Mobile app</span>
          </p>

          <motion.div className={styles.imageContainer}>
            <Image
              className={styles.image}
              src="/images/Home/hand-phone.png"
              width={201}
              height={160}
              alt="hand with phone"
              priority
            />
          </motion.div>
        </div>

        <div className={styles.bottomBlock}>
          <AnimatedText
            el="p"
            className={styles.description}
            text="A market-based assessment of your contribution."
            delay={1.5}
            once
          />

          <motion.div
            initial={{ scale: 0.75, y: 100 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.5 }}
            className={styles.titleBox}
          >
            <h2 className={styles.mainTitle}>
              To know your true value, Help others understand theirs.
            </h2>
          </motion.div>

          <Button
            className={styles.button}
            appearance="primary"
            onClick={() => router.push('/contact', { scroll: false })}
          >
            Schedule a demo
          </Button>

        </div>
      </div>
    </Section>
  );
}
