'use client';

import { useEffect, useState } from 'react';
import Hero from '@/components/organisms/BlogComponents/Hero';
import styles from '../../styles/components/organisms/Blog/BlogPage.module.scss';
import BottomComponent from '@/components/BottomComponent';
import LargeImage from '@/components/organisms/LargeImage';
import Description from '@/components/organisms/BlogComponents/Description';
import RelatedPosts from '@/components/organisms/BlogComponents/RelatedPosts';

interface BlogPageProps { }

export default async function BlogPage({ }: BlogPageProps) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 200)
  }, []);

  if (loading === false) {
    return <div className={styles.page}>
      <main className={styles.main}>
        <div style={{ height: '100vh' }}></div>
      </main>
    </div>
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hero />
        <LargeImage
          sectionName="home-image"
          mobileImage="/images/Blog/blog-mobile.png"
          desctopImage="/images/Blog/blog.png"
          alt="people laugh"
          scale
        />
        <Description />
        <RelatedPosts />
      </main>

      <BottomComponent className={styles.bottomComponent} />
    </div>
  );
}
