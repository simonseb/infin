'use client';

import React, { DetailedHTMLProps, HtmlHTMLAttributes, useRef } from 'react';
import styles from '../../styles/components/molecules/ImageWithButton.module.scss';
import Image from 'next/image';
import clsx from 'clsx';

import { Button } from '../atoms/Button';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ImageWithButtonProps
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  imageSrc: string;
  btnText: string;
  imageAlt: string;
  onClick: () => void;
}

export default function ImageWithButton({
  imageSrc,
  imageAlt,
  btnText,
  onClick,
  className,
  ...props
}: ImageWithButtonProps) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  return (
    <div
      className={clsx(styles.wrapper, className)}
      {...props}
      ref={containerRef}
    >
      <motion.div style={{ scale }} className={styles.imageContainer}>
        <Image
          className={styles.image}
          src={imageSrc}
          width={421}
          height={636}
          loading="lazy"
          quality={100}
          alt={imageAlt}
        />
      </motion.div>

      <Button className={styles.button} appearance="primary" onClick={onClick}>
        {btnText}
      </Button>
    </div>
  );
}
