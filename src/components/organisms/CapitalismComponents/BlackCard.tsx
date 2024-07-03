import React from 'react';
import styles from '../../../styles/components/organisms/Capitalism/BlackCard.module.scss';

import PlusIcon from '../../../../public/icons/plus.svg';

import { Section } from '@/components/atoms/Section';

interface BlackCardProps {}

export default function BlackCard({}: BlackCardProps) {
  return (
    <Section type="filled" className={styles.section}>
      <h2 className={styles.title}>
        The INFIN is one of the key tools to help the world move from Capitalism
        1.0 to <br className={styles.br} /> <span>Capitalism 2.0</span>
      </h2>

      <div className={styles.bottomBlock}>
        <div className={styles.pluses}>
          <PlusIcon className={styles.plusIcon} />
          <PlusIcon className={styles.plusIcon} />
          <PlusIcon className={styles.plusIcon} />
        </div>

        <p className={styles.text}>
          It’s built specifically to empower each individual to meaningfully
          participate in both the production process and in the distribution of
          the fruits of that labor.
        </p>
      </div>
    </Section>
  );
}
