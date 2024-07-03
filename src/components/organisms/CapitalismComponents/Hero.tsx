import React from 'react';
import styles from '../../../styles/components/organisms/Capitalism/Hero.module.scss';

import { Section } from '@/components/atoms/Section';
import { Button } from '@/components/atoms/Button';

interface HeroProps {}

export default function Hero({}: HeroProps) {
  return (
    <Section type="ghost" className={styles.section}>
      <div className={styles.tag}>Capitalism 2.0</div>
      <h2 className={styles.title}>
        Capitalism was built on the foundation of investing for the future.
      </h2>

      <div className={styles.bottomBlock}>
        <p className={styles.bottomText}>But whose future?</p>
        <Button className={styles.button} appearance="primary">
          Schedule a demo
        </Button>
      </div>
    </Section>
  );
}
