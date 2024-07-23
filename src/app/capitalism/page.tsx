'use client';
import React, { useState, useEffect } from 'react';
import styles from '../../styles/components/organisms/Capitalism/CapitalismPage.module.scss';

import Hero from '@/components/organisms/CapitalismComponents/Hero';
import BottomComponent from '@/components/BottomComponent';
import Description from '@/components/organisms/CapitalismComponents/Description';
import LargeImage from '@/components/organisms/LargeImage';
import WhiteCard from '@/components/organisms/CapitalismComponents/WhiteCard';
import BlackCard from '@/components/organisms/CapitalismComponents/BlackCard';
import { getCapitalism } from '@/lib/strapi/strapi-fetch';
import { motion } from 'framer-motion';
interface ICapitalism {
  attributes?: {
    title: string;
    Description: string;
    blocks: {
      title: string;
      quesion: string;
      descritpion: string;
      content: string;
      rightContent: string;
      bottomContent: string;
      answer: string;
      question: string;
    }[];
  };
}
interface CapitalismPageProps {}

export default function CapitalismPage({}: CapitalismPageProps) {
  const [data, setData] = useState<ICapitalism[]>();

  const getData = async () => {
    try {
      const res = await getCapitalism();
      if (res) {
        setData(res.data as ICapitalism[]);
      }
    } catch (err) {}
  };

  useEffect(() => {
    getData();
  }, []);
  if (!data) {
    return <></>;
  }
  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className={styles.page}>
        <main className={styles.main}>
          <Hero data={data} />
          <Description data={data} />
          <LargeImage
            sectionName="capitalism-image"
            mobileImage="/images/Capitalism/employees-mobile.png"
            desctopImage="/images/Capitalism/employees.png"
            alt="employees"
            scale
          />
          <WhiteCard data={data} />
          <BlackCard data={data} />
        </main>

        <BottomComponent />
      </div>
    </motion.div>
  );
}
