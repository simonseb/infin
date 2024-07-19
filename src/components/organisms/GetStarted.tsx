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

interface IHomeData {
  attributes?: {
    blocks: {
      question: string;
      title: string;
      button: {
        label: string;
        href: string;
      }[];
    }[];
  };
}

interface GetStartedProps extends CardProps {
  data?: IHomeData[] | undefined;
  style?: {}
}

export default function GetStarted({ className, style }: GetStartedProps) {
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
      style={{ ...style }}
    >
      <div ref={containerRef} style={{ textAlign: 'center' }}>
        <CardTitle
          className={styles.cardTitle}
          showTitle={false}
          showNumber={true}
          cardNumber=""
          cardTitle={'GET STARTED'}
        />

        {/* <AnimatedText
          className={styles.smallText}
          text={'What can The INFIN do for you?'}
          once
        /> */}
        <p className={styles.smallText}>What can The INFIN do for you?</p>

        <div ref={targetMiddle} className={styles.targetMiddle}>
          {/* <AnimatedLineText
            className={styles.mainTitle}
            el="h1"
            text={['get started']}
            once
          /> */}
          <h1 className={styles.mainTitle}>get started</h1>
        </div>

        <Button
          className={styles.button}
          appearance="primary"
          onClick={() => router.push('/contact')}
        >
          SCHEDULE A LIVE DEMO
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
              <Image
                src="/icons/pluses-group-small.svg"
                alt="ddd"
                width={100}
                height={100}
                className={styles.plusesLeft}
              />
              <Image
                src="/icons/pluses-group-small.svg"
                alt="ddd"
                width={100}
                height={100}
                className={styles.plusesLeft}
              />
            </>
          ) : (
            <>
              <Image
                src="/icons/plus-group.svg"
                alt="ddd"
                width={100}
                height={100}
                className={styles.plusesLeft}
              />
              <Image
                src="/icons/plus-group.svg"
                alt="ddd"
                width={100}
                height={100}
                className={styles.plusesLeft}
              />
            </>
          )}
        </motion.div>
      </div>
    </Section>
  );
}
