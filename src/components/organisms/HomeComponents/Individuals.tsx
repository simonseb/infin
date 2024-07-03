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

interface IndividualsProps extends CardProps { }

export default function Individuals({ className }: IndividualsProps) {
  const router = useRouter();

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
        <h3 className={styles.title}>
          Fairness and Objective, Data for Individuals
        </h3>

        <CardDescription
          titleTop="For Business"
          textMain="For employees, lack of recognition, lack of advancement, and toxic
              work culture are among the top reasons for leaving a company.
              Wouldn’t it be empowering to have ownership of–and visibility
              into–your contributions? Employees yearn to get recognized by
              their peers and be rewarded based on their value to the team.
              Ultimately, individuals own their profile on The INFIN and can
              bring their reputations with them, wherever they work."
          textTopLeft="Get recognition for your contributions"
          textBottomLeft="Own your reputation regardless of place of employment"
          textTopRight="Better navigate your career"
          textBottomRight="Let your opinion be heard in a safe, constructive way"
        />
      </div>
    </Section>
  );
}
