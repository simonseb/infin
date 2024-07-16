'use client';

import React, { useContext, useEffect, useRef } from 'react';
import styles from '../styles/components/ClientLayout.module.scss';

import Header from './organisms/Header';
import WelcomeAnimation from './organisms/WelcomeAnimation';

import { AppContext, IAppContext } from '@/context/app.context';
import { usePathname } from 'next/navigation';
import { colors } from '@/lib/constants';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { gsap, ScrollTrigger, ScrollSmoother } from '@/components/GsapLib';
import { useLayoutEffect } from 'react';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const { showAllDom, setShowAllDom } = useContext(AppContext) as IAppContext;
  const { light, dark, grey } = colors;
  const pathname = usePathname();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const backgroundColor = () => {
    switch (pathname) {
      case '/business':
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

  useLayoutEffect(() => {
    if (wrapperRef.current && contentRef.current) {
      ScrollSmoother.create({
        wrapper: wrapperRef.current,
        content: contentRef.current,
        smooth: 1.35,
        effects: true,
      });
    }
  }, [showAllDom]);

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
            <div id="wrapper" ref={wrapperRef}>
              <div id="content" ref={contentRef}>
                {children}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
