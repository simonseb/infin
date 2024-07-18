import React, { useEffect, useState } from 'react';
import styles from '../../../styles/components/organisms/Blog/RelatedPosts.module.scss';

import { Section } from '@/components/atoms/Section';
import { Button } from '@/components/atoms/Button';

import PostCard from '@/components/molecules/PostCard';

interface IBlogData {
  id?: string;
  attributes?: {
    blogs?: {
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

interface RelatedPostsProps {
  data?: IBlogData[];
  setCurrentBlog: (blog: any) => void;
  currentBlog: number;
}

export default function RelatedPosts({
  data,
  setCurrentBlog,
  currentBlog,
}: RelatedPostsProps) {
  if (!data || data.length === 0) {
    return null;
  }

  const { attributes } = data[currentBlog];

  if (!attributes || !attributes.blogs || !attributes.blogs.related_posts) {
    return null;
  }

  function parseDateString(dateString: string) {
    const [day, month, year] = dateString.split(' • ')[0].split(' ');
    return new Date(`${month} ${day}, ${year}`);
  }

  const { related_posts } = attributes.blogs;

  // Parse and sort the date strings
  console.log(related_posts);
  const sorted_related_posts = related_posts
    .map((related_post) => ({
      date: parseDateString(related_post.lastest_date),
      id: related_post.id,
      title: related_post.title,
      publisher: related_post.publisher,
      summary: related_post.summary,
      lastest_date: related_post.lastest_date,
      mainSection: {
        data: {
          attributes: {
            url: related_post.mainSection.data.attributes.url,
          },
        },
      },
      avata: {
        data: {
          attributes: {
            url: related_post.avata.data.attributes.url,
          },
        },
      },
    }))
    .sort((a: any, b: any) => a.date - b.date);

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
        {sorted_related_posts.map((post, index) => (
          <li
            key={post.id + 'key'}
            onClick={() => {
              if (currentBlog > index && currentBlog !== 0) {
                // setCurrentBlog(index);
                window.location.href = `/blog/${data[index].id}`;
              } else {
                // setCurrentBlog(index + 1);
                window.location.href = `/blog/${parseInt(data[index + 1].id as string)}`;
              }
            }}
            style={{ width: '33%' }}
          >
            <PostCard {...post} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
