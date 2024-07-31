'use client';

import React, { DetailedHTMLProps, HTMLAttributes, useRef } from 'react';
import styles from '../../styles/components/molecules/BlogPostCard.module.scss';
import clsx from 'clsx';
import { useScroll, useTransform, motion } from 'framer-motion';

import Image from 'next/image';
import Avatar from './Avatar';

interface PostCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
  mainSection: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
  title: string;
  summary: string;
  avata: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
  publisher: string;
}

export default function PostCard({
  className,
  mainSection,
  title,
  summary,
  avata,
  publisher,
  ...props
}: PostCardProps) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  return (
    <div
      className={clsx(styles.postCard, className)}
      {...props}
      ref={containerRef}
      style={{
        cursor: 'pointer',
        height: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
      }}
    >
      <div>
        <div className={styles.imageContainer}>
          <motion.div style={{ scale }}>
            <Image
              className={styles.image}
              src={`https://cheerful-crown-70fbfb15f1.media.strapiapp.com/${mainSection.data.attributes.url}`}
              // src={`http://localhost:1337${mainSection.data.attributes.url}`}
              alt={title}
              width={441}
              height={300}
            />
          </motion.div>
        </div>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.description}>{summary}</p>
      </div>

      <Avatar
        className={styles.avatar}
        imageSrc={avata.data.attributes.url}
        position=""
        name={publisher}
      />
    </div>
  );
}
