'use client';

import React, { DetailedHTMLProps, HTMLAttributes, useState } from 'react';

import styles from '../../styles/components/molecules/Socials.module.scss';
import clsx from 'clsx';

import {
  LinkedinShareButton,
  TwitterShareButton,
  FacebookShareButton,
} from 'react-share';

import LinkIcon from '../../../public/icons/link.svg';
import LinkedinIcon from '../../../public/icons/linkedin.svg';
import XIcon from '../../../public/icons/x.svg';
import FacebookIcon from '../../../public/icons/facebook.svg';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
interface SocialsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
}

export default function Socials({ className, ...props }: SocialsProps) {
  const pathname = usePathname();
  const baseUrl = process.env.NEXT_PUBLIC_PROJECT_URL;
  const link = baseUrl + pathname;

  const copylink = () => {
    navigator.clipboard.writeText(link);
    window.alert('Link copied!');
  };

  return (
    <div className={clsx(styles.socials, className)} {...props}>
      <div className={styles.link} onClick={copylink}>
        <Image
          src="/icons/thinkseb.svg"
          alt="ddd"
          width={100}
          height={100}
          className={styles.icon}
        />
      </div>

      <LinkedinShareButton
        className={styles.link}
        url="https://the-infin-full.vercel.app/blog"
        title="The INFIN"
      >
        <Image
          src="/icons/linkedin.svg"
          alt="ddd"
          width={100}
          height={100}
          className={styles.icon}
        />
      </LinkedinShareButton>

      <TwitterShareButton
        url="https://the-infin-full.vercel.app/blog"
        title="The INFIN"
        hashtags={['theinfin']}
        className={styles.link}
      >
        <Image
          src="/icons/x.svg"
          alt="ddd"
          width={100}
          height={100}
          className={styles.icon}
        />
      </TwitterShareButton>

      <FacebookShareButton
        url="https://the-infin-full.vercel.app/blog"
        title="The INFIN"
        className={styles.link}
      >
        <Image
          src="/icons/facebook.svg"
          alt="ddd"
          width={100}
          height={100}
          className={styles.fbIcon}
        />
      </FacebookShareButton>
    </div>
  );
}
