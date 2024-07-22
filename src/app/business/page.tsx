'use client';
import React, { useState, useEffect } from 'react';
import styles from '../../styles/components/organisms/Business/BusinessPage.module.scss';
import LargeHero from '@/components/organisms/LargeHero';
import BottomComponent from '@/components/BottomComponent';
import Benefits from '@/components/organisms/BusinessComponents/Benefits';
import Discover from '@/components/organisms/BusinessComponents/Discover';
import DiscoverImage from '@/components/organisms/BusinessComponents/DiscoverImage';
import Directing from '@/components/organisms/BusinessComponents/Directing';
import { getBusiness } from '@/lib/strapi/strapi-fetch';

interface IBusinessData {
  attributes?: {
    title: string;
    Description: string;
    blocks: {
      title: string;
      text: string;
      descritpion: string;
      descritpions: {
        title: string;
        descritpion: string;
      }[];
      button: {
        label: string;
        href: string;
      }[];
      article: {
        name: string;
        descritpion: string;
        title: string;
      }[];
      descritpiontop: string;
      descritpionBottom: string;
      video: {
        descritpion: string;
        title: string;
      };
      image: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
    }[];
  };
}
interface BusinessPageProps {}

export default function BusinessPage({}: BusinessPageProps) {
  const [data, setData] = useState<[IBusinessData]>();

  const getData = async () => {
    const res = await getBusiness();
    if (res) {
      setData(res.data as [IBusinessData]);
    }
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1); // get hash from URL
      if (hash) {
        const targetElement = document.getElementById(hash);
        if (targetElement) {
          setTimeout(() => {
            window.scrollTo({
              // top: hash === 'data' ? 4474 : 'benefits' ? 1771 : 0,
              top: targetElement.offsetTop,
              behavior: 'smooth',
            });
          }, 100);
        }
      }
    };

    handleHashChange();
    window.addEventListener('DOMContentLoaded', handleHashChange);
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  });

  useEffect(() => {
    getData();
  }, []);
  if (!data) {
    return null;
  }
  const { attributes } = data[0];

  if (!attributes) {
    return null;
  }

  const { blocks = [] } = attributes;
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.topBlock}>
          <LargeHero
            text={blocks[0].text || ''}
            titleFirstRow="Learn the ROI"
            titleSecondRow="of each employee"
            bottomTextAccent="It’s an open secret of any workplace:"
            bottomTextFirst={blocks[1].descritpiontop || ''}
            bottomTextSecond={blocks[1].descritpionBottom || ''}
            imageSrc="/images/Business/hero-mobile.png"
            imageMobileSrc="/images/Business/hero-mobile.png"
            imageAlt="girl is doing presentation"
            id="howItWorks"
          />
          <Benefits data={data} />
        </div>

        <div className={styles.bottomBlock}>
          <Discover data={data} />
          <DiscoverImage />
          <Directing />
        </div>
      </main>

      <BottomComponent />
    </div>
  );
}
