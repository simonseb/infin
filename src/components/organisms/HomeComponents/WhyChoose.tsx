'use client';

import React, { useRef } from 'react';
import styles from '../../../styles/components/organisms/Home/WhyChoose.module.scss';

import Image from 'next/image';
import PlusesIcon from '../../../../public/icons/plus-group.svg';
import PlusesSmallIcon from '../../../../public/icons/pluses-group-small.svg';

import AnimatedLineText from '../../molecules/AnimatedLineText';

import { Section } from '../../atoms/Section';
import { Divider } from '../../atoms/Divider';
import { useScroll, useTransform, motion } from 'framer-motion';
import useCheckIsMobile from '@/hooks/useCheckIsMobile';

interface WhyChooseProps { }

export default function WhyChoose({ }: WhyChooseProps) {
  const { isTablet } = useCheckIsMobile();
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  return (
    <Section className={styles.section} type="ghost">
      <AnimatedLineText
        className={styles.title}
        el="h3"
        text={['Why choose', 'the INFIN?']}
        once
      />

      <ul className={styles.cardList}>
        <li ref={containerRef}>
          <Divider className={styles.hr} />

          <div className={styles.card}>
            <h4 className={styles.smallTitle}>The old way</h4>
            <div className={styles.rightBlock}>
              <p className={styles.text}>
                Workers compete with their peers for recognition from bosses who
                also don’t like this dynamic.
              </p>

              <div className={styles.imageContainer}>
                <motion.div style={{ scale }}>
                  <Image
                    className={styles.image}
                    src="/images/Home/boys.png"
                    width={223}
                    height={223}
                    alt="image of people"
                    loading="lazy"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </li>

        <li ref={containerRef}>
          <Divider className={styles.hr} />

          <div className={styles.card}>
            <h4 className={styles.smallTitle}>The INFIN way</h4>
            <div className={styles.rightBlock}>
              <p className={styles.text}>
                Colleagues dynamically observe and rank each other’s
                contributions in a confidential, anonymous manner. The INFIN
                then calculates ownable, individual value and automatically
                distributes peer-reviewed recognition and rewards (while giving
                execs a clear picture of individual ROI).
              </p>

              <div className={styles.imageContainer}>
                <motion.div style={{ scale }}>
                  <Image
                    className={styles.image}
                    src="/images/Home/two-boys.jpg"
                    width={223}
                    height={223}
                    alt="image of people"
                    loading="lazy"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </li>
      </ul>

      <motion.div
        className={styles.plusesContainer}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        {isTablet ? (
          <PlusesSmallIcon className={styles.pluses} />
        ) : (
          <PlusesIcon className={styles.pluses} />
        )}
      </motion.div>
    </Section>
  );
}
