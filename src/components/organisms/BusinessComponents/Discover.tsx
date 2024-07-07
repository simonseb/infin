import React from 'react';
import styles from '../../../styles/components/organisms/Business/Discover.module.scss';
import { Section } from '@/components/atoms/Section';
interface IBusinessData {
  attributes?: {
    blocks: {
      video: {
        descritpion: string;
        title: string;
      };
    }[];
  };
}
interface DiscoverProps {
  data?: [IBusinessData] | undefined;
}

export default function Discover({ data }: DiscoverProps) {
  if (!data) {
    return null;
  }
  const { attributes } = data[0];

  if (!attributes) {
    return null;
  }

  const { blocks = [] } = attributes;
  return (
    <Section type="ghost" className={styles.discover}>
      <h3 className={styles.title}>{blocks[3].video.title}</h3>
      <p className={styles.text}>{blocks[3].video.descritpion} </p>
    </Section>
  );
}
