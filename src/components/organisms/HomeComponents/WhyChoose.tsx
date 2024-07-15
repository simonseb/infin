'use client';

import React, { useEffect, useRef } from 'react';
import styles from '../../../styles/components/organisms/Home/WhyChoose.module.scss';

import Image from 'next/image';
import PlusesIcon from '../../../../public/icons/plus-group.svg';
import PlusesSmallIcon from '../../../../public/icons/pluses-group-small.svg';

import AnimatedLineText from '../../molecules/AnimatedLineText';
import { Section } from '../../atoms/Section';
import { Divider } from '../../atoms/Divider';
import { useScroll, useTransform, motion } from 'framer-motion';
import useCheckIsMobile from '@/hooks/useCheckIsMobile';

interface IHomeData {
  attributes?: {
    title: string;
    Description: string;
    blocks: {
      title: string;
      article: {
        name: string;
        descritpion: string;
        title: string;
      }[];
    }[];
  };
}

interface WhyChooseProps {
  data?: IHomeData[] | undefined;
  setHeight?: (height: number) => void;
}

export default function WhyChoose({ data, setHeight }: WhyChooseProps) {
  const { isTablet } = useCheckIsMobile();
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  if (!data) {
    return null;
  }

  const { attributes } = data[0];

  if (!attributes) {
    return null;
  }

  const { blocks = [] } = attributes;

  return (
    <div
      ref={(el) => {
        setHeight && setHeight(el?.clientHeight as number);
      }}
    >
      <Section className={styles.section} type="ghost">
        <AnimatedLineText
          className={styles.title}
          el="h3"
          text={['Why choose', 'The INFIN?']}
          once
        />

        <ul className={styles.cardList}>
          <li ref={containerRef}>
            <Divider className={styles.hr} />

            <div className={styles.card}>
              <h4 className={styles.smallTitle}>{blocks[1].article[0].name}</h4>
              <div className={styles.rightBlock}>
                <p className={styles.text}>
                  {blocks[1].article[0].descritpion}
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
              <h4 className={styles.smallTitle}>{blocks[1].article[1].name}</h4>
              <div className={styles.rightBlock}>
                <p className={styles.text}>
                  {blocks[1].article[1].descritpion}
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
            <Image
              src="/icons/pluses-group-small.svg"
              alt="ddd"
              width={100}
              height={100}
            />
          ) : (
            <Image
              src="/icons/plus-group.svg"
              alt="ddd"
              width={100}
              height={100}
            />
          )}
        </motion.div>
      </Section>
    </div>
  );
}
