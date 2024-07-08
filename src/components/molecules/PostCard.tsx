'use client';

import React, { DetailedHTMLProps, HTMLAttributes, useRef } from 'react';
import styles from '../../styles/components/molecules/PostCard.module.scss';
import clsx from 'clsx';
import { useScroll, useTransform, motion } from 'framer-motion';

import Image from 'next/image';
import Avatar from './Avatar';

interface PostCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
  imageSrc: string;
  title: string;
  description: string;
  reviewerAvatar: string;
  reviewerPosition: string;
  reviewerName: string;
}

export default function PostCard({
  className,
  imageSrc,
  title,
  description,
  reviewerAvatar,
  reviewerPosition,
  reviewerName,
  ...props
}: PostCardProps) {

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);


  return (
    <div className={clsx(styles.postCard, className)} {...props} ref={containerRef}>
      <div className={styles.imageContainer}>
        <motion.div
          style={{ scale }}
        >
          <Image
            className={styles.image}
            src={imageSrc}
            alt={title}
            width={441}
            height={300}
          />
        </motion.div>
      </div>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.description}>{description}</p>

      <Avatar
        className={styles.avatar}
        imageSrc={reviewerAvatar}
        position={reviewerPosition}
        name={reviewerName}
      />
    </div>
  );
}
