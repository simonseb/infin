'use client';

import React, { useContext, useRef, useEffect } from 'react';
import styles from '../../../styles/components/organisms/Marketing/What.module.scss';
import clsx from 'clsx';
import { AppContext, IAppContext } from '@/context/app.context';
import useTargetInView from '@/hooks/useTargetInView';
import { Section } from '@/components/atoms/Section';
import Image from 'next/image';
import PlusIcon from '../../../../public/icons/plus.svg';
import PlusesGroup from '../../../../public/icons/plus-group.svg';
import { motion } from 'framer-motion';
interface IMarketing {
  attributes?: {
    blocks: {
      title: string;
      question: string;
      descritpionOne: string;
      descritpionTwo: string;
      descritpionThree: string;
    }[];
  };
}
interface WhatProps {
  data?: IMarketing[] | undefined;
}

export default function What({ data }: WhatProps) {
  if (!data) {
    return null;
  }

  const { attributes } = data[0];

  if (!attributes) {
    return null;
  }

  const { blocks = [] } = attributes;
  export default function What({ }: WhatProps) {

    const { setActiveSection, removeActiveSection } = useContext(
      AppContext,
    ) as IAppContext;

    const target = useRef(null);
    const { isInView } = useTargetInView(target);
    const isInViewRef = useRef(isInView);

    useEffect(() => {
      isInViewRef.current = isInView;
    }, [isInView]);

    const handleScroll = () => {
      if (target.current) {
        const boundRect = (target.current as HTMLElement).getBoundingClientRect();
        const headerBoundRect = document.getElementsByTagName('header').item(0)?.getBoundingClientRect();
        if (isInViewRef.current && headerBoundRect && boundRect.y < headerBoundRect.bottom) {
          setActiveSection('what')
        } else {
          removeActiveSection('what');
        }
      }
    }

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("scrollend", handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('scrollend', handleScroll);
      }
    }, []);

    return (
      <div ref={target}>
        <Section type="ghost" className={styles.section}>
          <div className={styles.leftBlock}>
            <p className={styles.smallText}>Designed for real meritocracy</p>

            <Image
              className={styles.image}
              src="/images/Marketing/infin.png"
              alt="Infin logo"
              width={321}
              height={310}
              quality={100}
            />

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
            >
              <div className={styles.pluses}>
                <PlusIcon className={clsx(styles.plusIcon, styles.topPlus)} />
                <PlusIcon className={clsx(styles.plusIcon, styles.leftPlus)} />
                <PlusIcon className={clsx(styles.plusIcon, styles.bottomRightPlus)} />
              </div>
            </motion.div>
          </div>

          <div className={styles.rightBlock}>
            <h3 className={styles.title}>
              What is <br />
              <span>The INFIN?</span>
            </h3>

            <p className={styles.bigText}>
              The INFIN is a way for employees to continuously and dynamically rate
              each other based on their experience of on-the-job performance. This
              helps management understand individual contributions at every level
              without spending hours on 360 reviews.
              <br />
              <br />
              The algorithm behind The INFIN automatically adjusts the weight of
              each employee’s “vote” based on how others rank them. The highest
              performers have the greatest say.
              <br />
              <br />
              Your expert consultant will then translate the data from The INFIN to
              specific operational efficiency improvements you can make. It’s a
              turnkey approach to improving your operations while at the same time
              bringing your employees into the process, recognizing both their
              contributions and their insights.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          >
            <div className={styles.pluses}>
              <PlusIcon className={clsx(styles.plusIcon, styles.topPlus)} />
              <PlusIcon className={clsx(styles.plusIcon, styles.leftPlus)} />
              <PlusIcon
                className={clsx(styles.plusIcon, styles.bottomRightPlus)}
              />
            </div>
          </motion.div>

          <div className={styles.rightBlock}>
            <h3 className={styles.title}>{blocks[2].question}</h3>

            <p className={styles.bigText}>
              {blocks[2].descritpionOne}
              <br />
              <br />
              {blocks[2].descritpionTwo}
              <br />
              <br />
              {blocks[2].descritpionThree}
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          >
            <PlusesGroup className={styles.plusesGroup} />
          </motion.div>
        </Section >
      </div >
    );
  }
}