'use client';

import React from 'react';
import styles from '../styles/components/BottomComponent.module.scss';

import GetStarted from './organisms/GetStarted';
import Footer from './organisms/Footer';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

interface BottomComponentProps {
  className?: string;
  style?: {};
}

export default function BottomComponent({
  className,
  style,
  ...props
}: BottomComponentProps) {
  const pathname = usePathname();

  return (
    <div className={clsx(styles.wrapper, className)} {...props} style={style}>
      {pathname !== '/contact' && <GetStarted />}
      <Footer />
    </div>
  );
}
