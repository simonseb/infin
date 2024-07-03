'use client';

import React from 'react';
import styles from '../../../styles/components/organisms/Individuals/Directing.module.scss';

import { Section } from '@/components/atoms/Section';

import Image from 'next/image';

import { Button } from '@/components/atoms/Button';
import { useRouter } from 'next/navigation';

interface DirectingProps {}

export default function Directing({}: DirectingProps) {
  const router = useRouter();

  return (
    <Section type="filled" className={styles.directing}>
      <div className={styles.imageBox}>
        <Image
          className={styles.image}
          src="/images/Individuals/directing-individuals.png"
          width={537}
          height={687}
          quality={100}
          alt="Boys are working with laptops"
        />
      </div>

      <div className={styles.rightBlock}>
        <p className={styles.smallText}>
          Better data leads to better decisions.
        </p>

        <h3 className={styles.title}>
          <span className={styles.titleAccent}>It’s time for you</span>{' '}
          <br className={styles.br} /> to be seen, appreciated, and rewarded for
          your contributions.
          <br />
          <br />
          And if not, you can take your profile to someplace that will.
        </h3>

        <Button
          appearance="primary"
          className={styles.button}
          onClick={() => router.push('/contact')}
        >
          See The INFIN for yourself
        </Button>
      </div>
    </Section>
  );
}
