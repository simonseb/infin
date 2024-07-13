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
    const height = 800;
    const time = 1;
    const cardsWrappers: any = gsap.utils.toArray('.cardList');
    const cards = gsap.utils.toArray('.homeCard');

    let ctx = gsap.context(() => {
      cards.forEach((wrapper: any, i: any) => {
        const card: any = cards[i];
        let scale = 1,
          rotation = 0;
        if (i !== cards.length - 1) {
          scale = 0.9 + 0.025 * i;
          rotation = -10;
        }
        gsap.from(card, {
          // scale: scale,
          rotationX: rotation,
          // transformOrigin: 'top center',
          ease: 'none',
          scrollTrigger: {
            trigger: wrapper,
            start: 'top top',
            end: 'bottom bottom',
            endTrigger: '.cardList',
            scrub: true,
            pin: wrapper,
            // pinSpacing: false,
            // markers: {
            //   indent: 150 * i,
            // },
            id: i + 1,
          },
        });
      });
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
          style={{ position: 'relative' }}
        >
          <Business
            data={data}
            className="homeCard"
            style={{ position: 'relative', zIndex: '2' }}
          />
          <Individuals
            data={data}
            className="homeCard"
            style={{ position: 'relative', zIndex: '3' }}
          />
          <Reviews
            data={data}
            className="homeCard"
            style={{ position: 'relative', zIndex: '4' }}
          />
        </div>
      </main>

      <BottomComponent style={{ marginTop: '270px' }} />
      <div id="space" style={{ height: 0, zIndex: 0 }}></div>
    </div>
  );
}
