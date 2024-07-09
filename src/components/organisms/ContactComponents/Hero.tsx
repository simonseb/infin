'use client';

import React from 'react';
import styles from '../../../styles/components/organisms/Contact/Hero.module.scss';
import { Section } from '@/components/atoms/Section';

interface HeroProps {}

export default function Hero({}: HeroProps) {
  return (
    <Section className={styles.hero} type="ghost">
      <p className={styles.smallText}>Contact us</p>

      <div className={styles.wrapper}>
        <h1 className={styles.title}>Connect with Us and start today</h1>

        <div className={styles.rightBlock}>
          <p className={styles.bigText}>
            Have questions, feedback, or need assistance?{' '}
            <span className={styles.accentText}>
              We&apos;d love to hear from you!
            </span>{' '}
            Feel free to reach out to us using any of the methods below. Our
            dedicated team is here to support you.
          </p>

          <div className={styles.address}>
            <div className={styles.addressKeys}>
              <p>Email Address: </p>
              <p>Phone Number:</p>
              <p>Street Address:</p>
              <p>City:</p>
              <p>State:</p>
              <p>ZIP Code:</p>
            </div>

            <div className={styles.addressValues}>
              <p>info@TheINFIN.com</p>
              <p>+1 (719) 789-7979</p>
              <p>100 Fillmore Street, 5th Floor</p>
              <p>Denver</p>
              <p>Colorado</p>
              <p>80206</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
