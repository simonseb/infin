import React from 'react';
import styles from '../../../styles/components/organisms/Business/Discover.module.scss';
import { Section } from '@/components/atoms/Section';

interface DiscoverProps {}

export default function Discover({}: DiscoverProps) {
  return (
    <Section type="ghost" className={styles.discover}>
      <h3 className={styles.title}>
        Discover performance trends on all levels
      </h3>
      <p className={styles.text}>
        From individual to business unit to the whole company, you’ll gain
        insights into performance over time and can optimize accordingly.{' '}
      </p>
    </Section>
  );
}
