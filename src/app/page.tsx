'use client';

import styles from '../styles/components/organisms/Home/HomePage.module.scss';
import {
  SetStateAction,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import Hero from '@/components/organisms/HomeComponents/Hero';
import WhyChoose from '@/components/organisms/HomeComponents/WhyChoose';
import Business from '@/components/organisms/HomeComponents/Business';
import Individuals from '@/components/organisms/HomeComponents/Individuals';
import Reviews from '@/components/organisms/HomeComponents/Reviews';
import BottomComponent from '@/components/BottomComponent';
import LargeImage from '@/components/organisms/LargeImage';
import { getHome } from '@/lib/strapi/strapi-fetch';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap, ScrollTrigger } from '@/components/GsapLib';
import useCheckIsMobile from '@/hooks/useCheckIsMobile';
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
  const [elementHeight, setElementHeight] = useState<number>(0);
  const [loaded, setLoaded] = useState<boolean>(false);

  const cardContainer = useRef<HTMLDivElement>(null);

  const { isMobile, isTablet } = useCheckIsMobile();

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
    setElementHeight(
      document.getElementById('business')?.parentElement
        ?.offsetHeight as number,
    );
  }, []);

  useEffect(() => {
    setElementHeight(elementHeight);
    if (cardContainer.current) {
      cardContainer.current.style.marginTop = isMobile
        ? `${-cardContainer.current.offsetHeight + elementHeight - 200}px`
        : `${-cardContainer.current.offsetHeight + elementHeight + 200}px`;
    }
  }, [elementHeight]);

  useEffect(() => {
    // ScrollTrigger && gsap.registerPlugin(ScrollTrigger);
    const height =
      (document.getElementById('business')?.clientHeight as number) - 30 || 900;
    const cards = gsap.utils.toArray('.homeCard');

    let ctx = gsap.context(() => {
      loaded &&
        gsap.from('.homeCard', {
          y: (index) => height * (cards.length - (index + 1)),
          duration: (index) => 0.6 / (index + 1),
          transformOrigin: 'top center',
          ease: 'none',
          stagger: (index) => 0.3 * index,
          scrollTrigger: {
            trigger: '.homeCard',
            start: 'top+=130px bottom',
            end: 'bottom top',
            endTrigger: '.cardList',
            scrub: true,
            pin: '.cardList',
          },
        });
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  });

  useEffect(() => {
    getData();
  }, []);
  if (!data) {
    return null;
  }

  return (
    <div
      className={styles.page}
      onLoad={() => {
        setLoaded(true);
      }}
    >
      <main className={styles.main}>
        <Hero data={data} />
        <LargeImage
          sectionName="home-image"
          mobileImage="/images/Home/presentation-mobile.png"
          desctopImage="/images/Home/presentation.png"
          alt="presentation"
          scale
        />
        <WhyChoose data={data} setHeight={setElementHeight} />

        <div
          className={styles.cardList + ' cardList'}
          ref={cardContainer}
          style={{
            position: 'relative',
          }}
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

      <BottomComponent />
      <div id="space" style={{ height: 0, zIndex: 0 }}></div>
    </div>
  );
}
