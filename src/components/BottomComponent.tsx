'use client';

import React from 'react';
import styles from '../styles/components/BottomComponent.module.scss';

import GetStarted from './organisms/GetStarted';
import Footer from './organisms/Footer';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

interface BottomComponentProps {
  className?: string;
}

export default function BottomComponent({
  className,
  ...props
}: BottomComponentProps) {
  const pathname = usePathname();

  return (
    <div className={clsx(styles.wrapper, className)} {...props}>
      {pathname !== '/contact' && <GetStarted />}
      <Footer />
    </div>
  );
}
