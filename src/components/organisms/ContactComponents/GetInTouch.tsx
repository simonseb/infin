import React from 'react';
import styles from '../../../styles/components/organisms/Contact/GetInTouch.module.scss';

interface GetInTouchProps {}

export default function GetInTouch({}: GetInTouchProps) {
  return (
    <div className={styles.description}>
      <h3 className={styles.title}>Contact our team for collaboration</h3>

      <ul>
        <li>Have questions, feedback, or need assistance?</li>
        <li>We&apos;re here to help! Fill out the form on your right side,</li>
        <li>and we&apos;ll get back to you as soon as possible.</li>
      </ul>
    </div>
  );
}
