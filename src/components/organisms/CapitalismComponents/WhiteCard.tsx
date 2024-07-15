import React from 'react';
import styles from '../../../styles/components/organisms/Capitalism/WhiteCard.module.scss';

import { Section } from '@/components/atoms/Section';
import Image from 'next/image';

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
          <Image
            src="/icons/plus.svg"
            width={100}
            height={100}
            alt={'plusicon'}
            className={styles.plusIcon}
          />
        </div>

        <p className={styles.text}>{blocks[3].answer}</p>
      </div>
    </Section>
  );
}
