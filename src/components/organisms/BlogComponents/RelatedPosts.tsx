import React, { useEffect, useState } from 'react';
import styles from '../../../styles/components/organisms/Blog/RelatedPosts.module.scss';

import { Section } from '@/components/atoms/Section';
import { Button } from '@/components/atoms/Button';

import PostCard from '@/components/molecules/PostCard';
import { useRouter } from 'next/navigation';

interface IBlogData {
  id?: string;
  attributes?: {
    blogs?: {
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
  const router = useRouter();

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
  console.log(related_posts);

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
      related_blog_id: related_post.related_blog_id,
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
        {sorted_related_posts.map(
          (post, index) =>
            index <= 2 && (
              <li
                key={post.id + 'key'}
                onClick={() => {
                  // console.log(post);
                  console.log(post.related_blog_id);
                  router.push(`/blog/${parseInt(post.related_blog_id)}`);
                  // window.location.href = `/blog/${parseInt(post.related_blog_id)}`;
                }}
                style={{ width: '33%' }}
              >
                <PostCard {...post} />
              </li>
            ),
        )}
      </ul>
    </Section>
  );
}
