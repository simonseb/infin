'use client';

import React, { useContext, useEffect, useRef } from 'react';
import styles from '../../styles/components/GetStarted.module.scss';
import Image from 'next/image';
import clsx from 'clsx';

import { CardTitle } from '../molecules/CardTitle';
import { Section } from '../atoms/Section';
import { Button } from '../atoms/Button';
import { CardProps } from '@/lib/types';
import { motion, useScroll, useTransform } from 'framer-motion';
import { AppContext, IAppContext } from '@/context/app.context';
import { useRouter } from 'next/navigation';

import girlImage from '/public/images/GetStarted/girl.png';
import boyImage from '/public/images/GetStarted/boy.png';
import PlusesIcon from '/public/icons/plus-group.svg';
import PlusesSmallIcon from '/public/icons/pluses-group-small.svg';

import useTargetInView from '@/hooks/useTargetInView';
import AnimatedLineText from '../molecules/AnimatedLineText';
import AnimatedText from '../molecules/AnimatedText';
import useCheckIsMobile from '@/hooks/useCheckIsMobile';

interface GetStartedProps extends CardProps { }

export default function GetStarted({ className }: GetStartedProps) {
  const { setActiveSection, removeActiveSection } = useContext(
    AppContext,
  ) as IAppContext;
  const containerRef = useRef(null);
  const { isMobile } = useCheckIsMobile();
  const router = useRouter();

  const targetMiddle = useRef(null);
  const targetBottom = useRef(null);

  const { isInView: isInViewTargetMiddle } = useTargetInView(targetMiddle);
  const { isInView: isInViewTargetBottom } = useTargetInView(targetBottom);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  useEffect(() => {
    isInViewTargetBottom
      ? setActiveSection('getstarted')
      : removeActiveSection('getstarted');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInViewTargetBottom, isInViewTargetMiddle]);

  return (
    <Section
      className={clsx(styles.section, className)}
      type="filled"
      id="getstarted"
    >
      <div ref={containerRef} style={{ textAlign: 'center' }}>
        <CardTitle
          className={styles.cardTitle}
          showTitle={false}
          showNumber={true}
          cardNumber="04"
          cardTitle="Get started"
        />

        <AnimatedText
          className={styles.smallText}
          text={['What can The INFIN do for you?']}
          delay={0.5}
        />

        <div ref={targetMiddle} className={styles.targetMiddle}>
          <AnimatedLineText
            className={styles.mainTitle}
            el="h1"
            text={['get started']}
            once
          />
        </div>

        <Button
          className={styles.button}
          appearance="primary"
          onClick={() => router.push('/contact')}
        >
          Schedule a live demo
        </Button>

        <div ref={targetBottom} />

        <div className={clsx(styles.imageContainer, styles.girlImageContainer)}>
          <motion.div style={{ scale }}>
            <Image className={styles.image} src={girlImage} alt="girl" />
          </motion.div>
        </div>

        <div className={clsx(styles.imageContainer, styles.boyImageContainer)}>
          <motion.div style={{ scale }}>
            <Image className={styles.image} src={boyImage} alt="boy" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          {isMobile ? (
            <>
              <PlusesSmallIcon className={styles.plusesLeft} />
              <PlusesSmallIcon className={styles.plusesRight} />
            </>
          ) : (
            <>
              <PlusesIcon className={styles.plusesLeft} />
              <PlusesIcon className={styles.plusesRight} />
            </>
          )}
        </motion.div>
      </div>
    </Section>
  );
}
