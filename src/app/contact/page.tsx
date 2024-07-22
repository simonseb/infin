'use client';

import { useContext, useEffect, useState } from 'react';

import styles from '../../styles/components/organisms/Contact/ContactPage.module.scss';
import { AppContext, IAppContext } from '@/context/app.context';
import Hero from '@/components/organisms/ContactComponents/Hero';
import BottomComponent from '@/components/BottomComponent';
import LargeImage from '@/components/organisms/LargeImage';
import Contact from '@/components/organisms/ContactComponents/Contact';
import { getContacts } from '@/lib/strapi/strapi-fetch';

interface ContactPageProps {}

interface IContactData {
  demo: [
    {
      title: string;
      text: string;
    },
  ];
  touch: [
    {
      title: string;
      text: string;
    },
  ];
  image: {
    image: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
  email_address: string;
}

export default function ContactPage({}: ContactPageProps) {
  const [data, setData] = useState<IContactData[]>();

  const [loading, setLoading] = useState(false);
  const { setActiveSection, removeActiveSection, activeSection } = useContext(
    AppContext,
  ) as IAppContext;

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 200);
  }, []);

  const getData = async () => {
    try {
      const res = await getContacts();
      if (res) {
        setData(res.data as IContactData[]);
      }
    } catch (err) {}
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading === false) {
    return (
      <div className={styles.page}>
        <main className={styles.main}>
          <div style={{ height: '100vh' }}></div>
        </main>
      </div>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hero />
        <Contact data={data && data[0]} />
        <LargeImage
          mobileImage="/images/Contact/handphone-mobile.png"
          desctopImage={data[0].image.image.data.attributes.url}
          alt="hand with phone"
          scale
        />
      </main>

      <BottomComponent className={styles.bottomComponent} />
    </div>
  );
}
