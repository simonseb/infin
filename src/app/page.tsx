'use client';

import styles from '../styles/components/organisms/Home/HomePage.module.scss';
import { useEffect } from 'react';
import Hero from '@/components/organisms/HomeComponents/Hero';
import WhyChoose from '@/components/organisms/HomeComponents/WhyChoose';
import Business from '@/components/organisms/HomeComponents/Business';
import Individuals from '@/components/organisms/HomeComponents/Individuals';
import Reviews from '@/components/organisms/HomeComponents/Reviews';
import BottomComponent from '@/components/BottomComponent';
import LargeImage from '@/components/organisms/LargeImage';

interface HomePageProps { }

const handleScroll = () => {
  const windowHeight = window.innerHeight;
  const distances = [360, 270, 180, 90, 0];
  let flag = false;
  const sections_sec = document.getElementById('business');
  const individuals_sec = document.getElementById('individuals');
  const review_sec = document.getElementById('reviews');
  const getstarted_sec = document.getElementById('getstarted');
  const footer_sec = document.getElementsByTagName('footer').item(0);
  const sections = [sections_sec, individuals_sec, review_sec, getstarted_sec, footer_sec];

  for (let index = 1; index < sections.length; index++) {
    const section: HTMLElement | null = sections[index];
    const prev_section: HTMLElement | null = sections[index - 1];
    if (section == null || prev_section == null) return;
    const prev_rect = prev_section.getBoundingClientRect();
    const rect = section.getBoundingClientRect();

    if (prev_rect.top <= windowHeight - distances[index - 1]) {
      if (rect.top - prev_rect.bottom < 18 && Math.ceil(rect.top) >= Math.ceil(windowHeight - distances[index])) {
        section.style.position = 'fixed';
        section.style.top = `${windowHeight - distances[index]}px`;
        flag = true;
      } else {
        section.style.position = 'relative';
        section.style.top = '0px';
      }
    } else {
      section.style.position = 'relative';
      section.style.top = '0px';
    }
  }
  const space_sec = document.getElementById('space');
  if (space_sec) {
    space_sec.style.height = flag ? '500px' : '0px';
  }
}


export default function HomePage({ }: HomePageProps) {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hero />
        <LargeImage
          sectionName="home-image"
          mobileImage="/images/Home/presentation-mobile.png"
          desctopImage="/images/Home/presentation.png"
          alt="presentation"
          scale
        />
        <WhyChoose />

        <div className={styles.cardList}>
          <Business />
          <Individuals />
          <Reviews />
        </div>
      </main>

      <BottomComponent />
      <div id='space' style={{ height: 0, zIndex: 0 }}></div>
    </div>
  );
}
