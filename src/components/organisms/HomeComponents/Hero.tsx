'use client';

import React, { useContext, useEffect } from 'react';
import styles from '../../../styles/components/organisms/Home/Hero.module.scss';

import Image from 'next/image';
import AnimatedText from '../../molecules/AnimatedText';

import { AppContext, IAppContext } from '@/context/app.context';
import { Section } from '../../atoms/Section';
import { Button } from '../../atoms/Button';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Cursor from '@/components/atoms/Cursor';
import useCheckIsMobile from '@/hooks/useCheckIsMobile';

interface IHomeData {
  attributes?: {
    title: string;
    Description: string;
    blocks: {
      title: string;
      descritpion: string; // Consider fixing this typo to "description"
      button: {
        label: string;
        href: string;
      }[];
    }[];
  };
}

interface HeroProps {
  data?: IHomeData[] | undefined; // Allow undefined
}

export default function Hero({ data }: HeroProps) {
  const router = useRouter();
  const { cursorVisibility, setCursorVisibility } = useContext(
    AppContext,
  ) as IAppContext;
  const { isMobile, isTablet } = useCheckIsMobile();

  const handleMouseEnter = () => {
    setCursorVisibility('block');
  };

  const handleMouseLeave = () => {
    setCursorVisibility('none');
  };

  if (!data) {
    return null;
  }

  const { attributes } = data[0];

  if (!attributes) {
    return null;
  }

  const { blocks = [] } = attributes;
  return (
    !!attributes && (
      <Section
        id="home"
        className={styles.hero}
        type="ghost"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          height: !isMobile && !isTablet ? '100vh' : 'auto',
          paddingBottom: '20px',
        }}
      >
        <div
          id="home_wrapper"
          className={styles.wrapper}
          style={{
            display: 'flex',
            width: '100%',
            height: '100%',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          {/* <Cursor cursorDisplay={cursorVisibility} /> */}
          <div className={styles.topBlock}>
            <p className={styles.smallText}>
              <span>{blocks[0].title}</span>
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

          <div className={styles.bottomBlock} style={{ marginTop: '150px' }}>
            <AnimatedText
              el="p"
              className={styles.description}
              text="A market-based assessment of your contribution."
              delay={1.5}
              once
            />

            {/* <motion.div
              initial={{ scale: 0.75, y: 100 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1.5 }}
              className={styles.titleBox}
            > */}
            <h2 className={styles.mainTitle}>{blocks[0].descritpion}</h2>
            {/* </motion.div> */}

            <Button
              className={styles.button}
              appearance="primary"
              onClick={() =>
                router.push(`${blocks[0].button[0].href}`, { scroll: false })
              }
              style={{ marginRight: '0' }}
            >
              {blocks[0].button[0].label}
            </Button>
          </div>
        </div>
      </Section>
    )
  );
}
