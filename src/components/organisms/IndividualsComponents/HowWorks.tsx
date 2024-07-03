import React from 'react';
import styles from '../../../styles/components/organisms/Individuals/HowWorks.module.scss';

import PlusIcon from '/public/icons/plus.svg';
import { Section } from '@/components/atoms/Section';

interface HowWorksProps {}

export default function HowWorks({}: HowWorksProps) {
  return (
    <Section type="filled" className={styles.section}>
      <div className={styles.topBlock}>
        <p className={styles.smallText}>
          Reputation management is easy with The INFIN
        </p>

        <h3 className={styles.title}>
          <p>How The INFIN </p>
          <p>works is simple</p>
        </h3>
      </div>

      <ul className={styles.list}>
        <li className={styles.listItem}>
          <div className={styles.listItemNumber}>
            01
            <hr className={styles.hr} />
          </div>
          <p className={styles.listItemText}>
            You rate other employees and they rank you, regularly updating for
            good and poor work experiences with them.
          </p>
        </li>

        <li className={styles.listItem}>
          <div className={styles.listItemNumber}>02</div>
          <p className={styles.listItemText}>
            The algorithm turns this data into dynamic rankings that you can see
            updated in real-time, giving you valuable feedback and advice on how
            to increase your value
          </p>
        </li>

        <li className={styles.listItem}>
          <div className={styles.listItemNumber}>03</div>
          <p className={styles.listItemText}>
            Team-reviewed individual contribution can be tracked over time, and
            appropriately applied to compensation practices.
          </p>
        </li>
      </ul>
      <PlusIcon className={styles.plusIcon} />
    </Section>
  );
}
