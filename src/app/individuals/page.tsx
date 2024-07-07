'use client';
import React, { useState, useEffect } from 'react';
import styles from '../../styles/components/organisms/Individuals/IndividualsPage.module.scss';
import LargeHero from '@/components/organisms/LargeHero';
import BottomComponent from '@/components/BottomComponent';
import HowWorks from '@/components/organisms/IndividualsComponents/HowWorks';
import Benefits from '@/components/organisms/IndividualsComponents/Benefits';
import Directing from '@/components/organisms/IndividualsComponents/Directing';
import Chart from '@/components/organisms/IndividualsComponents/Chart';
import { getIndividual } from '@/lib/strapi/strapi-fetch';
interface IndividualsPageProps {}

interface IDividualData {
  attributes?: {
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
      descritpionOne: string;
      descritpionTwo: string;
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
      step: {
        content: string;
        stepNumber: string;
      }[];
      organizationTitle: string;
      organizationContent: string;
    }[];
  };
}
export default function IndividualsPage({}: IndividualsPageProps) {
  const [data, setData] = useState<[IDividualData]>();

  const getData = async () => {
    try {
      const res = await getIndividual();
      if (res) {
        setData(res.data as [IDividualData]);
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
  const { attributes } = data[0];

  if (!attributes) {
    return null;
  }

  const { blocks = [] } = attributes;
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <LargeHero
          className={styles.hero}
          pluses
          imageText
          text={blocks[0].text || ''}
          titleFirstRow="Not appreciated"
          titleSecondRow="at work?"
          bottomTextAccent="You’re probably right."
          bottomTextFirst={blocks[0].descritpionOne || ''}
          bottomTextSecond={blocks[0].descritpionTwo || ''}
          imageSrc="/images/Individuals/individuals-hero.png"
          imageMobileSrc="/images/Individuals/individuals-hero.png"
          imageAlt="man portrait"
        />
        <HowWorks data={data} />
        <Benefits data={data} />
        <Chart data={data} />
        <Directing data={data} />
      </main>

      <BottomComponent className={styles.bottomComponent} />
    </div>
  );
}
