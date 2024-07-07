import React from 'react';
import styles from '../../../styles/components/organisms/Marketing/HeroDescription.module.scss';

import { Section } from '@/components/atoms/Section';
import { Button } from '@/components/atoms/Button';

interface IMarketing {
  attributes?: {
    blocks: {
      title: string;
      descritpion: string;
      question: string;
      list: {
        name: string;
      }[];
    }[];
  };
}
interface HeroDescriptionProps {
  data?: IMarketing[] | undefined;
}
export default function HeroDescription({ data }: HeroDescriptionProps) {
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
      <h3 className={styles.title}>{blocks[1].title}</h3>

      <div className={styles.bottomBlock}>
        <div className={styles.listBox}>
          <p className={styles.listTitle}>{blocks[1].question}</p>

          <ul className={styles.list}>
            {blocks[1].list.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
        </div>

        <p className={styles.rightText}>{blocks[1].descritpion}</p>
      </div>

      <Button className={styles.button} appearance="primary">
        Let&apos;s jump on a call
      </Button>
    </Section>
  );
}
