'use client';
import React from 'react';
import styles from '../../../styles/components/organisms/Marketing/What.module.scss';
import clsx from 'clsx';

import { Section } from '@/components/atoms/Section';

import Image from 'next/image';
import PlusIcon from '../../../../public/icons/plus.svg';
import PlusesGroup from '../../../../public/icons/plus-group.svg';
import { motion } from 'framer-motion';

interface WhatProps { }

export default function What({ }: WhatProps) {
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
        <PlusesGroup className={styles.plusesGroup} />
      </motion.div>
    </Section>
  );
}
