import React from 'react';
import styles from '../../../styles/components/organisms/Blog/Hero.module.scss';

import Socials from '@/components/molecules/Socials';
import Avatar from '@/components/molecules/Avatar';

import { Section } from '@/components/atoms/Section';
interface IBlogData {
  attributes?: {
    blogs: {
      main: {
        lastest_date: string;
        title: string;
        publisher: string;
        summary: string;
        article: string;
        avata: {
          data: {
            attributes: {
              url: string;
            };
          };
        };
      };
    };
  };
}
interface HeroProps {
  data?: IBlogData[] | undefined;
}

export default function Hero({ data }: HeroProps) {
  if (!data) {
    return null;
  }

  const { attributes } = data[0];

  if (!attributes) {
    return null;
  }

  const { blogs } = attributes;
  return (
    <Section type="ghost" className={styles.section}>
      <div className={styles.topBlock}>
        <div>
          <p className={styles.smallText}>{blogs.main.lastest_date}</p>
          <h2 className={styles.title}>{blogs.main.title}</h2>
        </div>

        <div className={styles.socialsBox}>
          <Socials />
        </div>
      </div>

      <div className={styles.bottomBlock}>
        <Avatar
          imageSrc={blogs.main.avata.data.attributes.url}
          position="Publisher"
          name={`${blogs.main.publisher}`}
          className={styles.reviewer}
        />

        <p className={styles.bottomText}>{blogs.main.summary}</p>
      </div>
    </Section>
  );
}
