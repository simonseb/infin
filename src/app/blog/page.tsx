'use client';

import { useEffect, useState } from 'react';
import Hero from '@/components/organisms/BlogComponents/Hero';
import styles from '../../styles/components/organisms/Blog/BlogPage.module.scss';
import BottomComponent from '@/components/BottomComponent';
import LargeImage from '@/components/organisms/LargeImage';
import Description from '@/components/organisms/BlogComponents/Description';
import RelatedPosts from '@/components/organisms/BlogComponents/RelatedPosts';
import { getBlog } from '@/lib/strapi/strapi-fetch';

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
        mainSection: {
          data: {
            attributes: {
              url: string;
            };
          };
        };
      };
      related_posts: {
        id: string;
        title: string;
        publisher: string;
        summary: string;
        lastest_date: string;
        mainSection: {
          data: {
            attributes: {
              url: string;
            };
          };
        };
        avata: {
          data: {
            attributes: {
              url: string;
            };
          };
        };
      }[];
    };
  };
}
interface BlogPageProps {}

export default function BlogPage({}: BlogPageProps) {
  const [data, setData] = useState<IBlogData[]>();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 200);
  }, []);

  const getData = async () => {
    try {
      const res = await getBlog();
      if (res) {
        setData(res.data as IBlogData[]);
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

  if (loading === false) {
    return (
      <div className={styles.page}>
        <main className={styles.main}>
          <div style={{ height: '100vh' }}></div>
        </main>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hero data={data} />
        <LargeImage
          sectionName="home-image"
          mobileImage=""
          desctopImage={`${data[0].attributes?.blogs.main.mainSection.data.attributes.url}`}
          alt="people laugh"
          scale
        />
        <Description data={data} />
        <RelatedPosts data={data} />
      </main>

      <BottomComponent className={styles.bottomComponent} />
    </div>
  );
}
