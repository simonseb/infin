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
import { gsap, ScrollTrigger } from '@/components/GsapLib';
import useCheckIsMobile from '@/hooks/useCheckIsMobile';
import GetStarted from '@/components/organisms/GetStarted';
import Footer from '@/components/organisms/Footer';
import { motion } from 'framer-motion';
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
    } catch (err) {}
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
    // const height = (document.getElementById('business')?.clientHeight as number) - 30 || 900;
    // const hegihts = [2800, 1870, 940, -220]
    // const hegihts = [3020, 2090, 1160, 0];
    // mobile : [4607, 3107, 1706, 0]
    let stagger = [0, 0.261, 0.504, 0.75];
    let duration = [0.8, 0.539, 0.296, 0.05];
    const cards = gsap.utils.toArray('.homeCard');
    const heightList = cards
      .map((item) => (item as HTMLElement)?.clientHeight as number)
      .reverse()
      .slice(1)
      .reduce(
        (arr, cur) => {
          const array = arr as number[];
          const current = cur as number;

          const last = array[array.length - 1] + current;
          return [...array, last];
        },
        [0],
      )
      .reverse();
    let width = window.innerWidth;

    duration[1] = (heightList[1] / heightList[0]) * duration[0];
    stagger[1] = 0.8 - duration[1];
    duration[2] = (heightList[2] / heightList[0]) * duration[0];
    stagger[2] = 0.8 - duration[2];
    const offset = width * 0.013 + 38;
    let ctx = gsap.context(() => {
      ScrollTrigger.normalizeScroll(true);
      loaded &&
        gsap.from('.homeCard', {
          y: (index) => heightList[index],
          duration: (index) => duration[index],
          transformOrigin: 'bottom center',
          ease: 'none',
          stagger: (index) => stagger[index],
          scrollTrigger: {
            trigger: '.homeCard',
            start: `top+=${offset}px bottom`,
            end: 'bottom top-=210px',
            endTrigger: '.last',
            scrub: true,
            pin: '.cardList',
            // snap: 1,
            // markers: true,
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
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
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
              className="homeCard last"
              style={{ position: 'relative', zIndex: '4' }}
            />
            <GetStarted
              className="homeCard"
              style={{ position: 'relative', zIndex: '5' }}
            />
          </div>
        </main>

        {/* <BottomComponent /> */}
        {/* {pathname !== '/contact' && <GetStarted />} */}
        <Footer />
        <div id="space" style={{ height: 0, zIndex: 0 }}></div>
      </div>
    </motion.div>
  );
}
