import React from 'react';
import styles from '../../../styles/components/organisms/Capitalism/Description.module.scss';

import { Section } from '@/components/atoms/Section';
import { Divider } from '@/components/atoms/Divider';
import clsx from 'clsx';
interface ICapitalism {
  attributes?: {
    blocks: {
      title: string;
      descritpion: string;
      content: string;
      rightContent: string;
      bottomContent: string;
    }[];
  };
}
interface DescriptionProps {
  data?: ICapitalism[] | undefined;
}

export default function Description({ data }: DescriptionProps) {
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
      <Divider className={styles.hrTop} />

      <div className={styles.wrapper}>
        <h3 className={styles.title}>{blocks[2].title}</h3>

        <div className={styles.textBox}>
          <p className={styles.text}>{blocks[2].descritpion}</p>
        </div>
      </div>

      <Divider className={styles.hrMid} />

      <div className={styles.wrapper}>
        <h3 className={styles.title}>{blocks[2].content}</h3>

        <div className={styles.textBox}>
          <p className={clsx(styles.text, styles.text2)}>
            {blocks[2].rightContent}
          </p>

          <p className={styles.smallText}>{blocks[2].bottomContent}</p>
        </div>
      </div>
    </Section>
  );
}
