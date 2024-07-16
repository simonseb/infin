'use client';

import React, { useContext, useRef, useEffect } from 'react';
import styles from '../../../styles/components/organisms/Individuals/Benefits.module.scss';
import { AppContext, IAppContext } from '@/context/app.context';
import useTargetInView from '@/hooks/useTargetInView';
import { Section } from '../../atoms/Section';
import { CardTitle } from '../../molecules/CardTitle';
import useCheckIsMobile from '@/hooks/useCheckIsMobile';
import Image from 'next/image';

interface IDividualData {
  attributes?: {
    blocks: {
      title: string;
      descritpions: {
        title: string;
        descritpion: string;
      }[];
    }[];
  };
}
interface BenefitsProps {
  data?: [IDividualData] | undefined;
}

export default function Benefits({ data }: BenefitsProps) {
  const { isMobile, isTablet } = useCheckIsMobile();
  const { setActiveSection, removeActiveSection } = useContext(
    AppContext,
  ) as IAppContext;

  const target = useRef(null);
  const { isInView } = useTargetInView(target);
  const isInViewRef = useRef(isInView);

  const triggerSection = () => {
    if (target.current) {
      const boundRect = (target.current as HTMLElement).getBoundingClientRect();
      const headerBoundRect = document
        .getElementsByTagName('header')
        .item(0)
        ?.getBoundingClientRect();
      if (
        isInViewRef.current &&
        headerBoundRect &&
        boundRect.y < headerBoundRect.bottom
      ) {
        setActiveSection('benefits');
      } else {
        removeActiveSection('benefits');
      }
    }
  };

  useEffect(() => {
    isInViewRef.current = isInView;
    triggerSection();
  }, [isInView]);

  const handleScroll = () => {
    triggerSection();
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scrollend', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scrollend', handleScroll);
    };
  }, []);

  if (!data) {
    return null;
  }

  const { attributes } = data[0];

  if (!attributes) {
    return null;
  }

  const { blocks = [] } = attributes;
  return (
    <div ref={target} id="benefits">
      <Section type="filled" className={styles.benefits}>
        <div className={styles.leftBlock}>
          <CardTitle
            className={styles.cardTitle}
            showNumber={isMobile}
            showTitle={false}
            cardNumber=""
          />

          <h3 className={styles.title}>
            As such,
            <br />
            <span className={styles.titleAccent}>The INFIN</span>
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
          <Image
            src="/icons/benefits-pluses-mobile.svg"
            width={100}
            height={100}
            alt={'benefits'}
            className={styles.plusesIconMobile}
          />
        ) : (
          <Image
            src="/icons/benefits-pluses.svg"
            width={100}
            height={100}
            alt={'benefits'}
            className={styles.plusesIconMobile}
          />
        )}
      </Section>
    </div>
  );
}
