'use client';

import React, { useEffect, useRef } from 'react';
import styles from '../../styles/components/molecules/AnimatedText.module.scss';

import { motion, useAnimation, useInView, Variant } from 'framer-motion';
import clsx from 'clsx';

interface AnimatedTextProps {
  text: string | string[];
  el?: keyof JSX.IntrinsicElements;
  className?: string;
  once?: boolean;
  repeatDelay?: number;
  delay?: number;

  animation?: {
    hidden: Variant;
    visible: Variant;
  };
}

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function AnimatedText({
  text,
  el: Wrapper = 'p',
  once,
  repeatDelay,
  delay,
  className,
  animation = defaultAnimations,
}: AnimatedTextProps) {
  const controls = useAnimation();
  const textArray = Array.isArray(text) ? text : [text];
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once });

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const show = () => {
      controls.start('visible');

      if (repeatDelay) {
        timeout = setTimeout(async () => {
          await controls.start('hidden');
          controls.start('visible');
        }, repeatDelay);
      }
    };

    if (isInView) {
      show();
    } else {
      controls.start('hidden');
    }

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  return (
    <Wrapper className={clsx(className)}>
      <span className={styles.srOnly}>{textArray.join(' ')}</span>

      <span className={styles.wrapper}>
        <motion.span
          ref={ref}
          aria-hidden
          initial="hidden"
          animate={controls}
          variants={{
            visible: {
              transition: { staggerChildren: 0.01, delayChildren: delay },
            },
            hidden: {},
          }}
        >
          {textArray.map((line, lineIndex) => (
            <span className={styles.block} key={`${line}-${lineIndex}`}>
              {line.split(' ').map((word, wordIndex) => (
                <span
                  className={styles.inlineBlock}
                  key={`${word}-${wordIndex}`}
                >
                  {word.split('').map((char, charIndex) => (
                    <motion.span
                      key={`${char}-${charIndex}`}
                      className={styles.inlineBlock}
                      variants={animation}
                    >
                      {char}
                    </motion.span>
                  ))}
                  <span className={styles.inlineBlock}>&nbsp;</span>
                </span>
              ))}
            </span>
          ))}
        </motion.span>
      </span>
    </Wrapper>
  );
}
