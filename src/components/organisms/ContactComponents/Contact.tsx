'use client';

import React, { useState } from 'react';
import styles from '../../../styles/components/organisms/Contact/Contact.module.scss';

import { Section } from '@/components/atoms/Section';

import ScheduleDemo from './ScheduleDemo';
import GetInTouch from './GetInTouch';
import Switcher from '@/components/molecules/Switcher';
import PlusIcon from '../../../../public/icons/plus.svg';
import ScheduleDemoForm from './ScheduleDemoForm';
import GetInTouchForm from './GetInTouchForm';

interface ContactProps {}

export default function Contact({}: ContactProps) {
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
  );
}
