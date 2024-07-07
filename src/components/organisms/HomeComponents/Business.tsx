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

interface IHomeData {
  attributes?: {
    title: string;
    Description: string;
    blocks: {
      title: string;
      content: string;
      topleft: string;
      topright: string;
      bottomleft: string;
      bottomright: string;
    }[];
  };
}

interface BusinessProps extends CardProps {
  data?: IHomeData[] | undefined;
}
export default function Business({ className, data }: BusinessProps) {
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

  if (!data) {
    return null;
  }

  const { attributes } = data[0];

  if (!attributes) {
    return null;
  }

  const { blocks = [] } = attributes;
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
        <h3 className={styles.title}>{blocks[2].title}</h3>

        <CardDescription
          titleTop="For Employers"
          textMain={blocks[2].content}
          textTopLeft={blocks[2].topleft}
          textBottomLeft={blocks[2].bottomleft}
          textTopRight={blocks[2].topright}
          textBottomRight={blocks[2].bottomright}
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
