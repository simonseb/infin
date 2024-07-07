'use client';

import styles from '../styles/components/organisms/Home/HomePage.module.scss';
import { useEffect, useState } from 'react';
import Hero from '@/components/organisms/HomeComponents/Hero';
import WhyChoose from '@/components/organisms/HomeComponents/WhyChoose';
import Business from '@/components/organisms/HomeComponents/Business';
import Individuals from '@/components/organisms/HomeComponents/Individuals';
import Reviews from '@/components/organisms/HomeComponents/Reviews';
import BottomComponent from '@/components/BottomComponent';
import LargeImage from '@/components/organisms/LargeImage';
import { getHome } from '@/lib/strapi/strapi-fetch';

interface HomePageProps {}

interface IHomeData {
  attributes?: {
    title: string;
    Description: string;
    blocks: {
      name: string;
      question: string;
      title: string;
      descritpion: string;
      button: {
        label: string;
        href: string;
      }[];
      article: {
        name: string;
        descritpion: string;
        title: string;
      }[];
      content: string;
      topleft: string;
      topright: string;
      bottomleft: string;
      bottomright: string;
      descritpionTop: string;
      descritpionBottom: string;
    }[];
  };
}

export default function HomePage({}: HomePageProps) {
  const [data, setData] = useState<IHomeData[]>();

  const getData = async () => {
    try {
      const res = await getHome();
      if (res) {
        setData(res.data as IHomeData[]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  if (!data) {
    return null;
  }
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hero data={data} />
        <LargeImage
          sectionName="home-image"
          mobileImage="/images/Home/presentation-mobile.png"
          desctopImage="/images/Home/presentation.png"
          alt="presentation"
          scale
        />
        <WhyChoose data={data} />

        <div className={styles.cardList}>
          <Business data={data} />
          <Individuals data={data} />
          <Reviews data={data} />
        </div>
      </main>

      <BottomComponent data={data} />
      <div id="space" style={{ height: 0, zIndex: 0 }}></div>
    </div>
  );
}
