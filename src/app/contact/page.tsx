import styles from '../../styles/components/organisms/Contact/ContactPage.module.scss';

import Hero from '@/components/organisms/ContactComponents/Hero';
import BottomComponent from '@/components/BottomComponent';
import LargeImage from '@/components/organisms/LargeImage';
import Contact from '@/components/organisms/ContactComponents/Contact';

interface ContactPageProps { }

export default async function ContactPage({ }: ContactPageProps) {
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
