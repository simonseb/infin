import React from 'react';
import styles from '../../../styles/components/organisms/Capitalism/WhiteCard.module.scss';

import PlusIcon from '../../../../public/icons/plus.svg';

import { Section } from '@/components/atoms/Section';

interface ICapitalism {
  attributes?: {
    blocks: {
      answer: string;
      question: string;
      title: string;
    }[];
  };
}
interface WhiteCardProps {
  data?: ICapitalism[] | undefined;
}
export default function WhiteCard({ data }: WhiteCardProps) {
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
      <div className={styles.leftBlock}>
        <p className={styles.smallText}>{blocks[3].title}</p>
      </div>

      <div className={styles.rightBlock}>
        <div className={styles.titleBox}>
          <h3 className={styles.title}>{blocks[3].question}</h3>

          <PlusIcon className={styles.plusIcon}></PlusIcon>
        </div>

        <p className={styles.text}>{blocks[3].answer}</p>
      </div>
    </Section>
  );
}
