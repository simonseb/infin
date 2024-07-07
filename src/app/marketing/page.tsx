'use client';
import React, { useState, useEffect } from 'react';
import Hero from '@/components/organisms/MarketingComponents/Hero';
import styles from '../../styles/components/organisms/Marketing/MarketingPage.module.scss';
import BottomComponent from '@/components/BottomComponent';
import HeroDescription from '@/components/organisms/MarketingComponents/HeroDescription';
import What from '@/components/organisms/MarketingComponents/What';
import Expected from '@/components/organisms/MarketingComponents/Expected';
import WeBeginWith from '@/components/organisms/MarketingComponents/WeBeginWith';
import { getMarketing } from '@/lib/strapi/strapi-fetch';
interface MarketingPageProps {}

interface IMarketing {
  attributes?: {
    title: string;
    Description: string;
    blocks: {
      title: string;
      question1: string;
      question2: string;
      answer: string;
      descritpion: string;
      question: string;
      list: {
        name: string;
      }[];
      descritpionOne: string;
      descritpionTwo: string;
      descritpionThree: string;
      descritpionFour: string;
      step: {
        content: string;
        stepNumber: string;
      }[];
      descBtn: string;
      quesiton: string;
    }[];
  };
}
export default function MarketingPage({}: MarketingPageProps) {
  const [data, setData] = useState<IMarketing[]>();

  const getData = async () => {
    try {
      const res = await getMarketing();
      if (res) {
        setData(res.data as IMarketing[]);
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
        <div className={styles.topBlock}>
          <Hero data={data} />
          <HeroDescription data={data} />
        </div>

        <div className={styles.bottomBlock}>
          <What data={data} />
          <Expected data={data} />
          <WeBeginWith data={data} />
        </div>
      </main>

      <BottomComponent />
    </div>
  );
}
