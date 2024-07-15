import React from 'react';
import styles from '../../../styles/components/organisms/Blog/RelatedPosts.module.scss';

import { Section } from '@/components/atoms/Section';
import { Button } from '@/components/atoms/Button';

import PostCard from '@/components/molecules/PostCard';

interface IBlogData {
  attributes?: {
    blogs?: {
      related_posts: {
        id: string;
        title: string;
        publisher: string;
        summary: string;
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

interface RelatedPostsProps {
  data?: IBlogData[];
}

export default function RelatedPosts({ data }: RelatedPostsProps) {
  if (!data || data.length === 0) {
    return null;
  }

  const { attributes } = data[0];

  if (!attributes || !attributes.blogs || !attributes.blogs.related_posts) {
    return null;
  }

  const { related_posts } = attributes.blogs;
  return (
    <Section type="filled" className={styles.section}>
      <div className={styles.topBlock}>
        <div className={styles.leftBlock}>
          <h3 className={styles.title}>Related posts</h3>

          <p className={styles.underTitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <Button appearance="ghost" className={styles.button}>
          View All
        </Button>
      </div>

      <ul className={styles.postList}>
        {related_posts.map((post) => (
          <li key={post.id + 'key'}>
            <PostCard {...post} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
