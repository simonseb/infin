'use client';
import React from 'react';
import styles from '../../../styles/components/organisms/Marketing/What.module.scss';
import clsx from 'clsx';

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
  return (
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
            <PlusIcon
              className={clsx(styles.plusIcon, styles.bottomRightPlus)}
            />
          </div>
        </motion.div>
      </div>

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
    </Section>
  );
}
