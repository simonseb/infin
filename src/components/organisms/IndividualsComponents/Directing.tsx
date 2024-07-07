'use client';

import React from 'react';
import styles from '../../../styles/components/organisms/Individuals/Directing.module.scss';

import { Section } from '@/components/atoms/Section';

import Image from 'next/image';

import { Button } from '@/components/atoms/Button';
import { useRouter } from 'next/navigation';

interface IDividualData {
  attributes?: {
    blocks: {
      title: string;
      descritpionOne: string;
      descritpionTwo: string;
      organizationTitle: string;
      organizationContent: string;
    }[];
  };
}
interface DirectingProps {
  data?: [IDividualData] | undefined;
}

export default function Directing({ data }: DirectingProps) {
  const router = useRouter();
  if (!data) {
    return null;
  }

  const { attributes } = data[0];

  if (!attributes) {
    return null;
  }

  const { blocks = [] } = attributes;
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
          <br className={styles.br} />
          {blocks[4].descritpionOne}
          <br />
          <br />
          {blocks[4].descritpionTwo}
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
