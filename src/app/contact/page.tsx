'use client';

import { useContext, useEffect, useState } from 'react';

import styles from '../../styles/components/organisms/Contact/ContactPage.module.scss';
import { AppContext, IAppContext } from '@/context/app.context';
import Hero from '@/components/organisms/ContactComponents/Hero';
import BottomComponent from '@/components/BottomComponent';
import LargeImage from '@/components/organisms/LargeImage';
import Contact from '@/components/organisms/ContactComponents/Contact';

interface ContactPageProps { }

export default function ContactPage({ }: ContactPageProps) {
  const [loading, setLoading] = useState(false);
  const { setActiveSection, removeActiveSection, activeSection } = useContext(
    AppContext,
  ) as IAppContext;

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 200)
  }, []);

  if (loading === false) {
    return <div className={styles.page}>
      <main className={styles.main}>
        <div style={{ height: '100vh' }}></div>
      </main>
    </div>
  }

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
