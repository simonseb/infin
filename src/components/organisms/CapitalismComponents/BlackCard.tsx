'use client';

import React, { useContext, useRef, useEffect } from 'react';
import styles from '../../../styles/components/organisms/Capitalism/BlackCard.module.scss';
import { AppContext, IAppContext } from '@/context/app.context';
import PlusIcon from '../../../../public/icons/plus.svg';
import useTargetInView from '@/hooks/useTargetInView';
import { Section } from '@/components/atoms/Section';

interface BlackCardProps { }

export default function BlackCard({ }: BlackCardProps) {
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

  return (
    <div ref={target}>
      <Section type="filled" className={styles.section}>
        <h2 className={styles.title}>
          The INFIN is one of the key tools to help the world move from Capitalism
          1.0 to <br className={styles.br} /> <span>Capitalism 2.0</span>
        </h2>

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
      </Section>
    </div>
  );
}
