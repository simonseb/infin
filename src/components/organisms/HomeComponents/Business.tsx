'use client';

import React, { useContext, useEffect, useRef } from 'react';
import styles from '../../../styles/components/organisms/Home/Business.module.scss';
import clsx from 'clsx';

import { Section } from '../../atoms/Section';
import { CardTitle } from '../../molecules/CardTitle';
import { CardProps } from '@/lib/types';
import { AppContext, IAppContext } from '@/context/app.context';

import useTargetInView from '@/hooks/useTargetInView';
import ImageWithButton from '../../molecules/ImageWithButton';
import AnimatedLineText from '../../molecules/AnimatedLineText';
import CardDescription from '@/components/molecules/CardDescription';
import { useRouter } from 'next/navigation';

interface BusinessProps extends CardProps { }

export default function Business({ className }: BusinessProps) {
  const router = useRouter();
  const { setActiveSection, removeActiveSection } = useContext(
    AppContext,
  ) as IAppContext;

  const target = useRef(null);
  const { isInView } = useTargetInView(target);

  useEffect(() => {
    isInView ? setActiveSection('business') : removeActiveSection('business');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  return (
    <Section
      className={clsx(styles.section, className)}
      type="filled"
      id="business"
    >
      <div className={styles.box} ref={target}>
        <CardTitle
          className={styles.cardTitle}
          showNumber={true}
          showTitle={false}
          cardNumber="01"
        />

        {/* <AnimatedLineText
          el="h3"
          text={['The Insufficient Status', 'Quo for Businesses']}
          className={styles.title}
        /> */}
        <h3 className={styles.title}>
          The Insufficient Status, Quo for Businesses
        </h3>

        <CardDescription
          titleTop="For Employers"
          textMain="It’s hard to evaluate individual contributions in a team
              environment because some employees are more visible. Similarly,
              some employees may take more credit than others. Meanwhile, the
              ones who are actually driving the company’s success may be flying
              completely under the radar. And then, employers have to decide on
              bonuses and promotions based on limited information and often with
              resentment from the employees. It’s frustrating."
          textTopLeft="Determine the individual contribution and ROI of every employee"
          textBottomLeft="Identify underperformers and better utilize employee strengths"
          textTopRight="Improve team dynamics and company culture"
          textBottomRight="Invest with better alignment of ROI, labor spend, and business
                objectives"
        />
      </div>

      <ImageWithButton
        className={styles.imageWithButton}
        imageSrc="/images/Home/business.png"
        imageAlt="girl and boy with laptop"
        btnText="THE INFIN FOR BUSINESS"
        onClick={() => router.push('/business')}
      />
    </Section>
  );
}
