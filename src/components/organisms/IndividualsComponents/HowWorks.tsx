import React from 'react';
import styles from '../../../styles/components/organisms/Individuals/HowWorks.module.scss';

import PlusIcon from '/public/icons/plus.svg';
import { Section } from '@/components/atoms/Section';
interface IDividualData {
  attributes?: {
    blocks: {
      title: string;
      step: {
        content: string;
        stepNumber: string;
      }[];
    }[];
  };
}

interface HowWorksProps {
  data?: [IDividualData] | undefined;
}

export default function HowWorks({ data }: HowWorksProps) {
  if (!data) {
    return null;
  }

  const { attributes } = data[0];

  if (!attributes) {
    return null;
  }

  const { blocks = [] } = attributes;
  return (
    <Section type="filled" className={styles.section}>
      <div className={styles.topBlock}>
        <p className={styles.smallText}>{blocks[0].title || ''}</p>

        <h3 className={styles.title}>
          <p>How The INFIN </p>
          <p>works is simple</p>
        </h3>
      </div>

      <ul className={styles.list}>
        {blocks[1].step.map((item, index) => (
          <li className={styles.listItem} key={index}>
            <div className={styles.listItemNumber}>
              0{item.stepNumber}
              <hr className={styles.hr} />
            </div>
            <p className={styles.listItemText}>{item.content}</p>
          </li>
        ))}
      </ul>
      <PlusIcon className={styles.plusIcon} />
    </Section>
  );
}
