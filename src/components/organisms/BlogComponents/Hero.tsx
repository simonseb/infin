import React from 'react';
import styles from '../../../styles/components/organisms/Blog/Hero.module.scss';

import Socials from '@/components/molecules/Socials';
import Avatar from '@/components/molecules/Avatar';

import { Section } from '@/components/atoms/Section';

interface HeroProps {}

export default function Hero({}: HeroProps) {
  return (
    <Section type="ghost" className={styles.section}>
      <div className={styles.topBlock}>
        <div>
          <p className={styles.smallText}>11 Jan 2022 • 5 min read</p>
          <h2 className={styles.title}>
            The Power <br className={styles.br} /> of Peer Feedback with The
            INFIN
          </h2>
        </div>

        <div className={styles.socialsBox}>
          <Socials />
        </div>
      </div>

      <div className={styles.bottomBlock}>
        <Avatar
          imageSrc="/images/olivia.png"
          position="Publisher"
          name="Olivia Johnson"
          className={styles.reviewer}
        />

        <p className={styles.bottomText}>
          In today&apos;s dynamic workplace, recognizing and rewarding employees
          for their contributions is crucial for fostering a positive work
          culture and driving individual and organizational success.
        </p>
      </div>
    </Section>
  );
}
