'use client';

import React, { useContext } from 'react';
import styles from '../styles/components/ClientLayout.module.scss';

import Header from './organisms/Header';
import WelcomeAnimation from './organisms/WelcomeAnimation';

import { AppContext, IAppContext } from '@/context/app.context';
import { usePathname } from 'next/navigation';
import { colors } from '@/lib/constants';

interface ClientLayotProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayotProps) {
  const { showAllDom, setShowAllDom } = useContext(AppContext) as IAppContext;
  const { light, dark, grey } = colors;
  const pathname = usePathname();

  const backgroundColor = () => {
    switch (pathname) {
      case '/business':
        return '#E8E8E8';
      case '/individuals':
        return '#E8E8E8';
      case '/contact':
        return dark;
      case '/capitalism':
        return grey;
      case '/blog':
        return light;
      case '/marketing':
        return '#050505';
      default:
        return grey;
    }
  };

  return (
    <>
      <WelcomeAnimation setShowAllDom={setShowAllDom} />
      {showAllDom && (
        <div
          className={styles.layout}
          style={{ backgroundColor: backgroundColor() }}
        >
          <div className={styles.container}>
            <Header />
            {children}
          </div>
        </div>
      )}
    </>
  );
}
