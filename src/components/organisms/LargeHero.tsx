'use client';

import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from '../../styles/components/LargeHero.module.scss';
import clsx from 'clsx';

import { Section } from '@/components/atoms/Section';
import { Button } from '@/components/atoms/Button';
import { useRouter } from 'next/navigation';

import Image from 'next/image';
import PlusIcon from '../../../public/icons/plus.svg';

interface LargeHeroProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
  pluses?: boolean;
  imageText?: boolean;
  text: string;
  titleFirstRow: string;
  titleSecondRow: string;
  bottomTextAccent: string;
  bottomTextFirst: string;
  bottomTextSecond: string;
  imageSrc: string;
  imageMobileSrc: string;
  imageAlt: string;
}

export default function LargeHero({
  text,
  pluses,
  imageText,
  titleFirstRow,
  titleSecondRow,
  bottomTextAccent,
  bottomTextFirst,
  bottomTextSecond,
  imageSrc,
  imageMobileSrc,
  imageAlt,
  className,
  ...props
}: LargeHeroProps) {
  const router = useRouter();

  return (
    <Section className={clsx(styles.hero, className)} type="ghost" {...props}>
      <div className={styles.topBlock}>
        <div className={styles.leftBlock}>
          <PlusIcon className={styles.plusIcon} />

          <div className={styles.textBox}>
            <p className={styles.text}>{text}</p>

            <h2 className={styles.title}>
              <span>{titleFirstRow}</span> <br className={styles.titleBr} />
              <span>{titleSecondRow}</span>
            </h2>
          </div>
        </div>

        <div className={styles.rightBlock}>
          <div className={styles.imageContainer}>
            <Image
              src={imageSrc}
              width={297}
              height={450}
              priority
              quality={100}
              alt={imageAlt}
              className={clsx(styles.image, styles.imageDesctop)}
            />
            <Image
              src={imageMobileSrc}
              width={297}
              height={450}
              priority
              quality={100}
              alt={imageAlt}
              className={clsx(styles.image, styles.imageMobile)}
            />
            {imageText && (
              <p className={styles.imageText}>No respect. No respect at all.</p>
            )}
          </div>

          <Button
            className={styles.button}
            appearance="primary"
            onClick={() => router.push('/contact')}
            style={imageText ? {} : { marginTop: 0 }}
          >
            Schedule a demo
          </Button>
        </div>
      </div>

      <p className={styles.bottomText}>
        <span className={styles.bottomTextAccent}>{bottomTextAccent}</span>{' '}
        {bottomTextFirst}
        <br />
        <br />
        {bottomTextSecond}
      </p>
    </Section>
  );
}
