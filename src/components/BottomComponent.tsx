'use client';

import React from 'react';
import styles from '../styles/components/BottomComponent.module.scss';

import GetStarted from './organisms/GetStarted';
import Footer from './organisms/Footer';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

interface IHomeData {
  attributes?: {
    blocks: {
      question: string;
      title: string;
      button: {
        label: string;
        href: string;
      }[];
    }[];
  };
}

interface BottomComponentProps {
  className?: string;
  data?: IHomeData[] | undefined;
}

export default function BottomComponent({
  className,
  data,
  ...props
}: BottomComponentProps) {
  const pathname = usePathname();
  if (!data) {
    return null;
  }
  return (
    <div className={clsx(styles.wrapper, className)} {...props}>
      {pathname !== '/contact' && <GetStarted data={data} />}
      <Footer />
    </div>
  );
}
