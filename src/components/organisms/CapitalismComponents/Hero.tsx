import React from 'react';
import styles from '../../../styles/components/organisms/Capitalism/Hero.module.scss';

import { Section } from '@/components/atoms/Section';
import { Button } from '@/components/atoms/Button';

interface ICapitalism {
  attributes?: {
    blocks: {
      title: string;
      quesion: string;
    }[];
  };
}
interface HeroProps {
  data?: ICapitalism[] | undefined;
}
export default function Hero({ data }: HeroProps) {
  if (!data) {
    return null;
  }

  const { attributes } = data[0];

  if (!attributes) {
    return null;
  }

  const { blocks = [] } = attributes;
  return (
    <Section
      type="ghost"
      className={styles.section}
      style={{
        display: 'flex',
        width: '100%',
        height: '100vh',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div>
        <div className={styles.tag}>Capitalism 2.0</div>
      </div>
      <h2 className={styles.title}>{blocks[0].title}</h2>

      <div className={styles.bottomBlock}>
        <p className={styles.bottomText}> {blocks[0].quesion}</p>
        <Button className={styles.button} appearance="primary">
          Schedule a demo
        </Button>
      </div>
    </Section>
  );
}
