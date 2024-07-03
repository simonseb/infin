import React from 'react';
import styles from '../../styles/components/molecules/CardDescription.module.scss';
import clsx from 'clsx';

import { Divider } from '../atoms/Divider';

interface CardDescriptionProps {
  className?: string;
  titleTop: string;
  textMain: string;
  textTopLeft: string;
  textTopRight: string;
  textBottomLeft: string;
  textBottomRight: string;
}

export default function CardDescription({
  titleTop,
  textMain,
  textTopLeft,
  textBottomLeft,
  textTopRight,
  textBottomRight,
  className,
  ...props
}: CardDescriptionProps) {
  return (
    <div className={clsx(styles.cardDescription, className)} {...props}>
      <Divider className={styles.hr} />

      <div className={styles.topBlock}>
        <h4 className={styles.topTitle}>{titleTop}</h4>
        <p className={styles.bigText}>{textMain}</p>
      </div>

      <Divider className={styles.hr} />

      <div className={styles.bottomBlock}>
        <h3 className={styles.bottomTitle}>Use insights from The INFIN to</h3>

        <p className={styles.bottomTextLeft}>
          <span className={styles.textTopLeft}>{textTopLeft}</span>
          <span className={styles.textBottomLeft}>{textBottomLeft}</span>
        </p>

        <p className={styles.bottomTextRight}>
          <span className={styles.textTopRight}>{textTopRight}</span>
          <span className={styles.textBottomRight}>{textBottomRight}</span>
        </p>
      </div>
    </div>
  );
}
