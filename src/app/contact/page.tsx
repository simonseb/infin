'use client';

import { useContext, useEffect } from 'react';

import styles from '../../styles/components/organisms/Contact/ContactPage.module.scss';
import { AppContext, IAppContext } from '@/context/app.context';
import Hero from '@/components/organisms/ContactComponents/Hero';
import BottomComponent from '@/components/BottomComponent';
import LargeImage from '@/components/organisms/LargeImage';
import Contact from '@/components/organisms/ContactComponents/Contact';

interface ContactPageProps { }

export default function ContactPage({ }: ContactPageProps) {
  const { setActiveSection, removeActiveSection, activeSection } = useContext(
    AppContext,
  ) as IAppContext;

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
      setTimeout(() => {
        removeActiveSection("contact");
      }, 500)
    }, 100)
  }, []);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hero />
        <Contact />
        <LargeImage
          mobileImage="/images/Contact/handphone-mobile.png"
          desctopImage="/images/Contact/handphone-desktop.png"
          alt="hand with phone"
          scale
        />
      </main>

      <BottomComponent className={styles.bottomComponent} />
    </div>
  );
}
