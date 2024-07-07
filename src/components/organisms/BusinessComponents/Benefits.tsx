'use client';

import React from 'react';
import styles from '../../../styles/components/organisms/Business/Benefits.module.scss';

import PlusesIcon from '../../../../public/icons/benefits-pluses.svg';
import PlusesIconMobile from '../../../../public/icons/benefits-pluses-mobile.svg';
import useCheckIsMobile from '@/hooks/useCheckIsMobile';

import { Section } from '../../atoms/Section';
import { CardTitle } from '../../molecules/CardTitle';

interface IBusinessData {
  attributes?: {
    blocks: {
      title: string;
      text: string;
      descritpions: {
        title: string;
        descritpion: string;
      }[];
      button: {
        label: string;
        href: string;
      }[];
      article: {
        name: string;
        descritpion: string;
        title: string;
      }[];
      descritpiontop: string;
      descritpionBottom: string;
    }[];
  };
}
interface BenefitsProps {
  data?: [IBusinessData] | undefined;
}

export default function Benefits({ data }: BenefitsProps) {
  const { isMobile, isTablet } = useCheckIsMobile();
  if (!data) {
    return null;
  }

  const { attributes } = data[0];

  if (!attributes) {
    return null;
  }

  const { blocks = [] } = attributes;
  return (
    <Section type="filled" className={styles.benefits}>
      <div className={styles.leftBlock}>
        <CardTitle
          className={styles.cardTitle}
          showNumber={isMobile}
          showTitle={false}
          cardNumber="03"
        />

        <h3 className={styles.title}>
          The INFIN
          <br />
          <span className={styles.titleAccent}>can be used to</span>
        </h3>
      </div>

      <ul className={styles.list}>
        {blocks[2].descritpions.map((item, index) => (
          <li className={styles.listItem} key={index}>
            <h4 className={styles.smallTitle}>{item.title}</h4>
            <p className={styles.text}>{item.descritpion}</p>
          </li>
        ))}
      </ul>
      {isTablet ? (
        <PlusesIconMobile className={styles.plusesIconMobile} />
      ) : (
        <PlusesIcon className={styles.plusesIcon} />
      )}
    </Section>
  );
}
