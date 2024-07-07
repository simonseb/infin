import React from 'react';
import styles from '../../../styles/components/organisms/Capitalism/BlackCard.module.scss';

import PlusIcon from '../../../../public/icons/plus.svg';

import { Section } from '@/components/atoms/Section';

interface ICapitalism {
  attributes?: {
    blocks: {
      title: string;
      descritpion: string;
      content: string;
      rightContent: string;
      bottomContent: string;
    }[];
  };
}
interface BlackCardProps {
  data?: ICapitalism[] | undefined;
}
export default function BlackCard({ data }: BlackCardProps) {
  if (!data) {
    return null;
  }

  const { attributes } = data[0];

  if (!attributes) {
    return null;
  }

  const { blocks = [] } = attributes;
  return (
    <Section type="filled" className={styles.section}>
      <h2 className={styles.title}>{blocks[5].title}</h2>

      <div className={styles.bottomBlock}>
        <div className={styles.pluses}>
          <PlusIcon className={styles.plusIcon} />
          <PlusIcon className={styles.plusIcon} />
          <PlusIcon className={styles.plusIcon} />
        </div>

        <p className={styles.text}>{blocks[5].descritpion}</p>
      </div>
    </Section>
  );
}
