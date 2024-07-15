'use client';
import React, { useEffect, useState } from 'react';
import styles from '../../../styles/components/organisms/Blog/Description.module.scss';
import { Controlled as CodeMirror } from 'react-codemirror2';
import { marked } from 'marked';

import { Section } from '@/components/atoms/Section';

import LargeImage from '../LargeImage';
import Avatar from '@/components/molecules/Avatar';
import Socials from '@/components/molecules/Socials';

interface IBlogData {
  attributes?: {
    blogs?: {
      main?: {
        article?: string;
        publisher?: string;
      };
    };
  };
}

interface DescriptionProps {
  data?: IBlogData[];
}

export default function Description({ data }: DescriptionProps) {
  if (!data || data.length === 0) {
    return null;
  }

  const { attributes } = data[0];

  if (!attributes || !attributes.blogs || !attributes.blogs.main) {
    return null;
  }

  const { article, publisher } = attributes.blogs.main;

  // Convert Markdown to HTML
  const markedString = (markdown: string) => {
    return { __html: marked(markdown) };
  };
  return (
    <Section type="ghost" className={styles.section}>
      <div className={styles.container}>
        {article ? (
          <div dangerouslySetInnerHTML={markedString(article)} />
        ) : (
          <p>No content available</p>
        )}

        <div className={styles.bottomBlock}>
          <Avatar
            imageSrc="/images/olivia.png"
            position="Publisher"
            name={`${publisher}`}
          />
          <div className={styles.socialsBox}>
            <p className={styles.socialsText}>Share this post</p>
            <Socials className={styles.socials} />
          </div>
        </div>
      </div>
    </Section>
  );
}
