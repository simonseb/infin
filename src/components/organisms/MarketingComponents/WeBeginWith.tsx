'use client';

import React, { useContext, useRef, useEffect } from 'react';
import styles from '../../../styles/components/organisms/Marketing/WeBeginWith.module.scss';
import { AppContext, IAppContext } from '@/context/app.context';
import useTargetInView from '@/hooks/useTargetInView';
import { Section } from '@/components/atoms/Section';
import { Button } from '@/components/atoms/Button';
import { useRouter } from 'next/navigation';
interface IMarketing {
  attributes?: {
    blocks: {
      title: string;
      descBtn: string;
      quesiton: string;
      list: {
        name: string;
      }[];
      descritpionOne: string;
      descritpionTwo: string;
      descritpionThree: string;
      descritpionFour: string;
    }[];
  };
}
interface WeBeginWithProps {
  data?: IMarketing[] | undefined;
}

export default function WeBeginWith({ data }: WeBeginWithProps) {
  const router = useRouter();
  const { setActiveSection, removeActiveSection } = useContext(
    AppContext,
  ) as IAppContext;

  const target = useRef(null);
  const { isInView } = useTargetInView(target);
  const isInViewRef = useRef(isInView);

  useEffect(() => {
    isInViewRef.current = isInView;
  }, [isInView]);

  const handleScroll = () => {
    if (target.current) {
      const boundRect = (target.current as HTMLElement).getBoundingClientRect();
      const headerBoundRect = document.getElementsByTagName('header').item(0)?.getBoundingClientRect();
      if (isInViewRef.current && headerBoundRect && boundRect.y < headerBoundRect.bottom) {
        setActiveSection('webeginwith')
      } else {
      }
    }
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
      <Section type="ghost" className={styles.section}>
        <p className={styles.underTitle}>Align incentives with impact</p>

        <h2 className={styles.title}>{blocks[4].title}</h2>

        <div className={styles.wrapper}>
          <p className={styles.bigText}>
            {blocks[4].descritpionOne}
            <br />
            <br />
            {blocks[4].descritpionTwo}
            <br />
            <br />
            {blocks[4].descritpionThree}
            <br />
            <br />
            {blocks[4].descritpionFour}
          </p>

          <div className={styles.listBox}>
            <p className={styles.listTitle}>{blocks[4].quesiton}</p>

            <ul className={styles.list}>
              {blocks[4].list.map((item, index) => (
                <li className={styles.listItem} key={index}>
                  {item.name}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.buttonBox}>
            <Button
              className={styles.button}
              appearance="accent"
              onClick={() => router.push('/contact')}
            >
              Schedule a call
            </Button>

            <p className={styles.buttonText}>{blocks[4].descBtn}</p>
          </div>
        </div>
      </Section>
    </div>
  );
}
