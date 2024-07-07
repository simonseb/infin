'use client';

import React from 'react';
import styles from '../../../styles/components/organisms/Home/Individuals.module.scss';
import clsx from 'clsx';

import { Section } from '../../atoms/Section';
import { CardTitle } from '../../molecules/CardTitle';
import { CardProps } from '@/lib/types';
import { useRouter } from 'next/navigation';

import ImageWithButton from '../../molecules/ImageWithButton';
import CardDescription from '@/components/molecules/CardDescription';

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

interface IndividualsProps extends CardProps {
  data?: IHomeData[] | undefined;
}

export default function Individuals({ className, data }: IndividualsProps) {
  const router = useRouter();

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
      id="individuals"
    >
      <ImageWithButton
        className={styles.imageWithButton}
        imageSrc="/images/Home/individuals.png"
        imageAlt="girl and boy with laptop"
        btnText="THE INFIN FOR Individuals"
        onClick={() => router.push('/individuals')}
      />

      <div className={styles.box}>
        <CardTitle
          className={styles.cardTitle}
          showTitle={false}
          showNumber={true}
          cardNumber="02"
          cardTitle="INDIVIDUALS"
        />

        {/* <AnimatedLineText
          el="h2"
          text={['Fairness and Objective', 'Data for Individuals']}
          className={styles.title}
        /> */}
        <h3 className={styles.title}>{blocks[3].title}</h3>

        <CardDescription
          titleTop="For Business"
          textMain={blocks[3].content}
          textTopLeft={blocks[3].topleft}
          textBottomLeft={blocks[3].bottomleft}
          textTopRight={blocks[3].topright}
          textBottomRight={blocks[3].bottomright}
        />
      </div>
    </Section>
  );
}
