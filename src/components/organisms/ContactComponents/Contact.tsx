'use client';

import React, { useState, useContext, useRef, useEffect } from 'react';
import styles from '../../../styles/components/organisms/Contact/Contact.module.scss';

import { Section } from '@/components/atoms/Section';
import { AppContext, IAppContext } from '@/context/app.context';
import useTargetInView from '@/hooks/useTargetInView';
import ScheduleDemo from './ScheduleDemo';
import GetInTouch from './GetInTouch';
import Switcher from '@/components/molecules/Switcher';
import PlusIcon from '../../../../public/icons/plus.svg';
import ScheduleDemoForm from './ScheduleDemoForm';
import GetInTouchForm from './GetInTouchForm';

interface ContactProps { }

export default function Contact({ }: ContactProps) {
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
        setActiveSection('contact')
      } else {
        removeActiveSection('contact');
      }
    }
  }
  useEffect(() => {
    isInViewRef.current = isInView;
    triggerSection();
  }, [isInView]);

  const handleScroll = () => {
    triggerSection()
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scrollend", handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scrollend', handleScroll);
    }
  }, []);

  const [isActiveSection, setIsActiveSection] = useState<'left' | 'right'>(
    'left',
  );

  const leftButtonClick = () => {
    setIsActiveSection('left');
  };
  const rightButtonClick = () => {
    setIsActiveSection('right');
  };

  return (
    <div ref={target}>
      <Section type="filled" className={styles.contact}>
        <Switcher
          className={styles.switcher}
          isActive={isActiveSection}
          leftButtonClick={leftButtonClick}
          rightButtonClick={rightButtonClick}
        />

        <div className={styles.wrapper}>
          {isActiveSection === 'left' ? <ScheduleDemo /> : <GetInTouch />}

          <div className={styles.separator}>
            <PlusIcon className={styles.firstPlus} />
            <hr className={styles.hr} />
            <PlusIcon className={styles.secondPlus} />
          </div>

          <div className={styles.formContainer}>
            <div className={styles.formBox}>
              <p className={styles.formTitle}>
                {isActiveSection === 'left' ? 'Schedule a demo' : 'Get in touch'}
              </p>

              {isActiveSection === 'left' ? (
                <ScheduleDemoForm id="#schedule" className={styles.form} />
              ) : (
                <GetInTouchForm id="#getintouch" className={styles.form} />
              )}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
