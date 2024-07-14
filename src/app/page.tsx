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
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

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
    const height = 700;
    const time = 1;
    const cardsWrappers: any = gsap.utils.toArray('.cardList');
    const cards = gsap.utils.toArray('.homeCard');

    let ctx = gsap.context(() => {
      // cards.forEach((wrapper: any, i: any) => {
      // const card: any = cards[i];

      gsap.from('.homeCard', {
        y: (index) => height * (cards.length - (index + 1)),
        duration: (index) => 0.6 / (index + 1),
        transformOrigin: 'top center',
        ease: 'none',
        stagger: (index) => 0.3 * index,
        scrollTrigger: {
          trigger: '.homeCard',
          start: 'bottom bottom',
          end: 'bottom top',
          // endTrigger: '.cardList',
          scrub: true,
          pin: '.cardList',
          // pinSpacing: false,
          // markers: {
          //   indent: 150 * i,
          // },
        },
      });
      // });
    });

    return () => ctx.revert();
  });

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

        <div
          className={styles.cardList + ' cardList'}
          style={{ position: 'relative', marginTop: '-1450px' }}
        >
          <Business
            data={data}
            className="homeCard"
            style={{ position: 'relative', zIndex: '4' }}
          />
          <Individuals
            data={data}
            className="homeCard"
            style={{ position: 'relative', zIndex: '3' }}
          />
          <Reviews
            data={data}
            className="homeCard"
            style={{ position: 'relative', zIndex: '2' }}
          />
        </div>
      </main>

      <BottomComponent />
      <div id="space" style={{ height: 0, zIndex: 0 }}></div>
    </div>
  );
}
