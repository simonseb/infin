'use client';

import React, { useContext, useEffect, useRef } from 'react';
import styles from '../../../styles/components/organisms/Home/Reviews.module.scss';
import clsx from 'clsx';

import { Section } from '../../atoms/Section';
import { Divider } from '../../atoms/Divider';
import { CardTitle } from '../../molecules/CardTitle';
import { CardProps } from '@/lib/types';
import { motion } from 'framer-motion';
import { AppContext, IAppContext } from '@/context/app.context';

import PlusIcon from '../../../../public/icons/plus.svg';
import ReviewList from '../../molecules/ReviewList';
import useTargetInView from '@/hooks/useTargetInView';

export const reviews = [
  {
    review:
      "“[The INFIN] immediately identified the healthy and high performing teams, comfortable with task conflict, versus the dysfunctional and ineffective teams unable to withstand constructive feedback. Healthy and high performing teams were able to eliminate ambiguity and subjectivity in recognizing and rewarding each other's contributions. The INFIN provided us with a transparent and fair system for acknowledging the hard work and dedication of our colleagues and a way to willingly discuss weaknesses as individuals and as a team.”",
    imageSrc: '/images/Home/carla.png',
    name: 'Carla M.',
    job: 'Business Change Manager at DRGinvest',
  },
  {
    review:
      '“We appreciated its focus on fairness and objective data, it has completely changed how we handle employee evaluations and promotions. It also supports and motivates a true merit-based culture, eliminating the usual office politics. This platform has enabled our leadership team to better recognize the daily efforts of our employees, making sure that recognition and promotion opportunities are justly given. Thank you!”',
    imageSrc: '/images/Home/tyler.png',
    name: 'Tyler H.',
    job: 'CEO of Nuclear Holding Group',
  },
  {
    review:
      "“[The INFIN] immediately identified the healthy and high performing teams, comfortable with task conflict, versus the dysfunctional and ineffective teams unable to withstand constructive feedback. Healthy and high performing teams were able to eliminate ambiguity and subjectivity in recognizing and rewarding each other's contributions. The INFIN provided us with a transparent and fair system for acknowledging the hard work and dedication of our colleagues and a way to willingly discuss weaknesses as individuals and as a team.”",
    imageSrc: '/images/Home/carla.png',
    name: 'Carla M.',
    job: 'Business Change Manager at DRGinvest',
  },
  {
    review:
      '“We appreciated its focus on fairness and objective data, it has completely changed how we handle employee evaluations and promotions. It also supports and motivates a true merit-based culture, eliminating the usual office politics. This platform has enabled our leadership team to better recognize the daily efforts of our employees, making sure that recognition and promotion opportunities are justly given. Thank you!”',
    imageSrc: '/images/Home/tyler.png',
    name: 'Tyler H.',
    job: 'CEO of Nuclear Holding Group',
  },
  {
    review:
      "“[The INFIN] immediately identified the healthy and high performing teams, comfortable with task conflict, versus the dysfunctional and ineffective teams unable to withstand constructive feedback. Healthy and high performing teams were able to eliminate ambiguity and subjectivity in recognizing and rewarding each other's contributions. The INFIN provided us with a transparent and fair system for acknowledging the hard work and dedication of our colleagues and a way to willingly discuss weaknesses as individuals and as a team.”",
    imageSrc: '/images/Home/carla.png',
    name: 'Carla M.',
    job: 'Business Change Manager at DRGinvest',
  },
  {
    review:
      '“We appreciated its focus on fairness and objective data, it has completely changed how we handle employee evaluations and promotions. It also supports and motivates a true merit-based culture, eliminating the usual office politics. This platform has enabled our leadership team to better recognize the daily efforts of our employees, making sure that recognition and promotion opportunities are justly given. Thank you!”',
    imageSrc: '/images/Home/tyler.png',
    name: 'Tyler H.',
    job: 'CEO of Nuclear Holding Group',
  },
];

interface IHomeData {
  attributes?: {
    blocks: {
      name: string;
      descritpionTop: string;
      descritpionBottom: string;
      title: string;
      descritpion: string;
      article: {
        name: string;
        descritpion: string;
        title: string;
      }[];
    }[];
  };
}

interface ReviewsProps extends CardProps {
  data?: IHomeData[] | undefined;
  style?: {};
}

export default function Reviews({ className, data, style }: ReviewsProps) {
  const targetMiddle = useRef(null);
  const targetBottom = useRef(null);

  const { isInView: isInViewTargetBottom } = useTargetInView(targetBottom);
  const { isInView: isInViewTargetMiddle } = useTargetInView(targetMiddle);

  const { setActiveSection, removeActiveSection } = useContext(
    AppContext,
  ) as IAppContext;

  useEffect(() => {
    isInViewTargetBottom || isInViewTargetMiddle
      ? setActiveSection('reviews')
      : removeActiveSection('reviews');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInViewTargetBottom, isInViewTargetMiddle]);

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
      id="reviews"
      style={{ ...style }}
    >
      <div className={styles.firstBlock}>
        <CardTitle
          className={styles.cardTitle}
          showTitle={false}
          showNumber={true}
          cardNumber=""
          cardTitle="Reviews"
        />

        {/* <AnimatedLineText
          className={styles.title}
          el="h3"
          text={['Fair and', 'Objective']}
        /> */}
        <h3 className={styles.title}>
          Fair and, <br /> <span>Objective</span>
        </h3>

        <motion.div
          className={styles.pluses}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          <PlusIcon className={styles.plusIcon} />
          <PlusIcon className={styles.plusIcon} />
          <PlusIcon className={styles.plusIcon} />
        </motion.div>

        <div className={styles.description} ref={targetMiddle}>
          <p>{blocks[4].descritpionTop}</p>

          <Divider className={styles.hr} />

          <p>{blocks[4].descritpionBottom}</p>
        </div>
      </div>

      <ReviewList reviews={reviews} />
      <div ref={targetBottom} />
    </Section>
  );
}
