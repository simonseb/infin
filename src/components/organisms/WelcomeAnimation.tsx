'use client';

import React, { useState, useEffect } from 'react';
import styles from '../../styles/components/WelcomeAnimation.module.scss';

import { motion } from 'framer-motion';

import FinIcon from '../../../public/icons/logo/fin';
import NIcon from '../../../public/icons/logo/n';
import IIcon from '../../../public/icons/logo/i';
import TheIcon from '../../../public/icons/logo/the';

interface WelcomeAnimationProps {
  setShowAllDom: (value: boolean) => void;
}

export default function WelcomeAnimation({
  setShowAllDom,
}: WelcomeAnimationProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
      setShowAllDom(true);
    }, 1500);

    setTimeout(() => {
      document.body.style.overflow = 'scroll';
    }, 3000);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    mounted && (
      <motion.div
        className={styles.wrapper}
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.7, delay: 2.3 }}
      >
        <motion.div className={styles.logo}>
          <motion.div
            className={styles.the}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <TheIcon />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.4 }}
          >
            <IIcon />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: 360 }}
            transition={{ duration: 0.7 }}
          >
            <NIcon />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 2.1 }}
          >
            <FinIcon />
          </motion.div>
        </motion.div>
      </motion.div>
    )
  );
}
