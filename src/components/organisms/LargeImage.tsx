'use client';

import React, { useContext, useEffect, useRef } from 'react';
import styles from '../../styles/components/LargeImage.module.scss';
import clsx from 'clsx';

import { useScroll, useTransform, motion } from 'framer-motion';
import { AppContext, IAppContext } from '@/context/app.context';
import { TypeActiveSection } from '@/lib/types';

import Image from 'next/image';
import useTargetInView from '@/hooks/useTargetInView';
import useCheckIsMobile from '@/hooks/useCheckIsMobile';

interface LargeImageProps {
  className?: string;
  classNameImage?: string;
  sectionName?: TypeActiveSection;
  mobileImage: string;
  desctopImage: string;
  alt: string;
  scale: boolean;
}

export default function LargeImage({
  className,
  classNameImage,
  sectionName,
  mobileImage,
  desctopImage,
  alt,
  scale,
}: LargeImageProps) {
  const { isMobile } = useCheckIsMobile();
  const { setActiveSection, removeActiveSection } = useContext(
    AppContext,
  ) as IAppContext;

  const containerRef = useRef(null);
  const targetRef = useRef(null);

  const { isInView } = useTargetInView(targetRef);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const scaleAnimation = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  useEffect(() => {
    if (sectionName) {
      isInView
        ? setActiveSection(sectionName)
        : removeActiveSection(sectionName);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  return (
    <div className={clsx(styles.wrapper)} ref={containerRef}>
      <div ref={targetRef} />
      <motion.div
        style={{ scale: scale ? scaleAnimation : 1 }}
        className={clsx(styles.imageContainer, className)}
      >
        <div className={styles.content}>
          <h1 className={styles.heading}>
            The Impact of Custom <br /> Orthotics on Athletic Performance
          </h1>
          <p className={styles.subtext}>
            If left unaddressed, your foot conditions can rapidly spiral out of
            control leading to serious, painful, interrelated problems. Our
            world-class podiatrists base your personalized orthotic designs on
            your current foot conditions.
          </p>
          {isMobile ? (
            <Image
              className={clsx(styles.image, classNameImage)}
              src={mobileImage}
              alt={alt}
              width={355}
              height={640}
              quality={100}
              priority
            />
          ) : (
            <Image
              className={clsx(styles.image, classNameImage)}
              src={desctopImage}
              alt={alt}
              quality={100}
              width={1416}
              height={720}
              priority
            />
          )}
        </div>
      </motion.div>
    </div>
  );
}
