import React from 'react';
import styles from '../../../styles/components/organisms/Marketing/HeroDescription.module.scss';

import { Section } from '@/components/atoms/Section';
import { Button } from '@/components/atoms/Button';

interface HeroDescriptionProps {}

export default function HeroDescription({}: HeroDescriptionProps) {
  return (
    <Section type="filled" className={styles.section}>
      <h3 className={styles.title}>
        Beta access to a wholly-managed implementation of The INFIN in your
        organization is now available. We will personally coach both you and
        your employees through its findings.
      </h3>

      <div className={styles.bottomBlock}>
        <div className={styles.listBox}>
          <p className={styles.listTitle}>
            From this personalized engagement, you can discover:
          </p>

          <ul className={styles.list}>
            <li>How labor investments are impacting shareholder value.</li>
            <li>Who is contributing the most value.</li>
            <li>Who is underperforming.</li>
            <li>
              How to best distribute bonuses, compensation, and other resources.
            </li>
          </ul>
        </div>

        <p className={styles.rightText}>
          The initial gathering and processing of data will be followed by a
          hands-on consultation on how to use it for optimizing resource
          allocation and other HR/operational considerations.
        </p>
      </div>

      <Button className={styles.button} appearance="primary">
        Let&apos;s jump on a call
      </Button>
    </Section>
  );
}
