import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from '../../styles/components/atoms/Logo.module.scss';
import clsx from 'clsx';

import { useRouter } from 'next/navigation';

export interface LogoProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  fill?: string;
}

export default function Logo({
  fill = '#121212',
  className,
  ...props
}: LogoProps) {
  const router = useRouter();

  return (
    <div
      id="logo-box"
      className={clsx(styles.logoBox, className)}
      {...props}
      onClick={() => router.push('/')}
    >
      <svg
        width="1380"
        height="242"
        viewBox="0 0 1380 242"
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M37.3449 18.9045H37.2188V18.7783L37.3449 18.9045Z" />
        <path d="M18.6035 0.149414L37.224 18.778H0V0.149414H18.6035Z" />
        <path d="M169.232 59.4689V95.0899H150.66V59.4689H93.032L74.4599 40.8717V18.9079H37.3498L37.2188 18.7768V0H93.032V40.8717H150.66L169.232 59.4689Z" />
        <path d="M37.2188 18.9072H37.3498L55.8393 37.3876V95.1861H37.2188V18.9072Z" />
        <path d="M37.3449 18.9045H37.2188V18.7783L37.3449 18.9045Z" />
        <path d="M282.818 76.4777V95.0892H206.472L187.866 76.4777V56.917H206.472V76.4777H282.818Z" />
        <path d="M282.806 0H206.46V18.6115H282.806V0Z" />
        <path d="M282.818 38.3051V56.9195H206.472L187.866 38.3051V18.6133H206.472V38.3051H282.818Z" />
        <path d="M93.0296 59.4717H74.4575V95.0926H93.0296V59.4717Z" />
        <path d="M169.24 0.149414H150.668V40.8729H169.24V0.149414Z" />
        <path d="M515.993 47.2314H468.785V241.237H515.993V47.2314Z" />
        <path d="M709.543 47.2314V241.237H662.335V47.2314H515.952V0H662.335L709.543 47.2314Z" />
        <path d="M997.595 0H804.004V47.2285H997.595V0Z" />
        <path d="M803.985 166.037H756.777V241.238H803.985V166.037Z" />
        <path d="M803.985 47.2314V118.804H950.368V166.035H803.985L756.777 118.804V47.2314H803.985Z" />
        <path d="M422.467 95.1865H375.259V241.236H422.467V95.1865Z" />
        <path d="M421.527 0V95.1868L374.319 47.9583V0H421.527Z" />
        <path d="M1186.39 47.2314H1139.18V241.237H1186.39V47.2314Z" />
        <path d="M1380 47.2314V241.237H1332.79V47.2314H1186.41V0H1332.79L1380 47.2314Z" />
        <path d="M1091.97 95.1865H1044.77V241.236H1091.97V95.1865Z" />
        <path d="M1091.97 0V95.1868L1044.77 47.9583V0H1091.97Z" />
      </svg>
    </div>
  );
}
