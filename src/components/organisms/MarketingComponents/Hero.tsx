'use client';

import React, { useContext, useState } from 'react';
import styles from '../../../styles/components/organisms/Marketing/Hero.module.scss';

import { Section } from '@/components/atoms/Section';
import { Button } from '@/components/atoms/Button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
interface IMarketing {
  attributes?: {
    blocks: {
      title: string;
      question1: string;
      question2: string;
      answer: string;
    }[];
  };
}
interface HeroProps {
  data?: IMarketing[] | undefined;
}

export default function Hero({ data }: HeroProps) {
  const router = useRouter();
  const [cursorVisibility, setCursorVisibility] = useState<'block' | 'none'>(
    'none',
  );

  const handleMouseEnter = () => {
    setCursorVisibility('block');
  };

  const handleMouseLeave = () => {
    setCursorVisibility('none');
  };
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
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ display: 'flex', width: '100%', height: '100vh' }}
    >
      <div id="home_wrapper" className={styles.wrapper}>
        {/* <Cursor cursorDisplay={cursorVisibility} className={styles.whitePluses} /> */}
        <div className={styles.topBlock}>
          <div className={styles.titleBox}>
            <div className={styles.tag}>Marketing Efforts</div>
            <h2 className={styles.title}>
              <span>{blocks[0].title}</span>
            </h2>
          </div>

          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              src="/images/Marketing/hero-marketing.png"
              alt="The infin dashboard"
              quality={100}
              width={573}
              height={370}
            />
          </div>
        </div>

        <div className={styles.bottomBlock} style={{ marginTop: '48px' }}>
          <Button
            appearance="primary"
            className={styles.button}
            onClick={() => router.push('/contact')}
          >
            Let&apos;s jump on a call
          </Button>

          <div className={styles.textBox}>
            <p className={styles.text}>{blocks[0].question1}</p>

            <p className={styles.bottomText}>{blocks[0].answer}</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
