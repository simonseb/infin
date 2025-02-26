'use client';

import { useEffect, useState } from 'react';
import Hero from '@/components/organisms/BlogComponents/Hero';
import styles from '../../../styles/components/organisms/Blog/BlogPage.module.scss';
import BottomComponent from '@/components/BottomComponent';
import LargeImage from '@/components/organisms/LargeImage';
import Description from '@/components/organisms/BlogComponents/Description';
import RelatedPosts from '@/components/organisms/BlogComponents/RelatedPosts';
import { getBlog } from '@/lib/strapi/strapi-fetch';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';

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
        related_blog_id: string;
      }[];
    };
  };
}
interface BlogPageProps {}

export default function BlogPage({}: BlogPageProps) {
  const [data, setData] = useState<IBlogData[]>();
  const [currentBlog, setCurrentBlog] = useState(0);

  const [loading, setLoading] = useState(false);

  const params = useParams();

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 200);
  }, []);

  const getData = async () => {
    try {
      const res: any = await getBlog();
      res.data.sort((a: any, b: any) => parseInt(a.id) - parseInt(b.id));
      if (res) {
        res.data.map((item: any, index: number) => {
          if (item.id === parseInt(params.post_id as string)) {
            setCurrentBlog(index);
          }
        });
        setData(res.data as IBlogData[]);
      }
    } catch (err) {}
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
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className={styles.page}>
        <main className={styles.main}>
          <Hero data={data} currentBlog={currentBlog} />
          <LargeImage
            sectionName="home-image"
            mobileImage=""
            desctopImage={`${data[currentBlog].attributes?.blogs.main.mainSection.data.attributes.url}`}
            alt="people laugh"
            scale
          />
          <Description data={data} currentBlog={currentBlog} />
          <RelatedPosts
            data={data}
            setCurrentBlog={setCurrentBlog}
            currentBlog={currentBlog}
          />
        </main>

        <BottomComponent className={styles.bottomComponent} />
      </div>
    </motion.div>
  );
}
