'use client';

import React, { useContext, useRef, useEffect } from 'react';
import styles from '../../../styles/components/organisms/Capitalism/BlackCard.module.scss';
import { AppContext, IAppContext } from '@/context/app.context';
import PlusIcon from '../../../../public/icons/plus.svg';
import useTargetInView from '@/hooks/useTargetInView';
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

  const { setActiveSection, removeActiveSection } = useContext(
    AppContext,
  ) as IAppContext;

  const target = useRef(null);
  const { isInView } = useTargetInView(target);
  const isInViewRef = useRef(isInView);

  const triggerSection = () => {
    if (target.current) {
      const boundRect = (target.current as HTMLElement).getBoundingClientRect();
      const headerBoundRect = document.getElementsByTagName('header').item(0)?.getBoundingClientRect();
      if (isInViewRef.current && headerBoundRect && boundRect.y < headerBoundRect.bottom) {
        setActiveSection('blackcard')
      } else {
        removeActiveSection('blackcard');
      }
    }
  }

  useEffect(() => {
    isInViewRef.current = isInView;
    triggerSection();
  }, [isInView]);

  const handleScroll = () => {
    triggerSection();
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scrollend", handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scrollend', handleScroll);
    }
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
    <div ref={target}>
      <Section type="filled" className={styles.section}>
        <h2 className={styles.title}>{blocks[5].title}</h2>

        <div className={styles.bottomBlock}>
          <div className={styles.pluses}>
            <PlusIcon className={styles.plusIcon} />
            <PlusIcon className={styles.plusIcon} />
            <PlusIcon className={styles.plusIcon} />
          </div>

          <p className={styles.text}>
            It’s built specifically to empower each individual to meaningfully
            participate in both the production process and in the distribution of
            the fruits of that labor.
          </p>
        </div>

        <p className={styles.text}>{blocks[5].descritpion}</p>

      </Section >
    </div >
  );
}
