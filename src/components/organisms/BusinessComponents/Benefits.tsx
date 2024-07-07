'use client';

import React, { useContext, useRef, useEffect } from 'react';
import styles from '../../../styles/components/organisms/Business/Benefits.module.scss';
import { AppContext, IAppContext } from '@/context/app.context';
import useTargetInView from '@/hooks/useTargetInView';
import PlusesIcon from '../../../../public/icons/benefits-pluses.svg';
import PlusesIconMobile from '../../../../public/icons/benefits-pluses-mobile.svg';
import useCheckIsMobile from '@/hooks/useCheckIsMobile';

import { Section } from '../../atoms/Section';
import { CardTitle } from '../../molecules/CardTitle';

interface BenefitsProps { }

export default function Benefits({ }: BenefitsProps) {

  const { setActiveSection, removeActiveSection } = useContext(
    AppContext,
  ) as IAppContext;

  const target = useRef(null);
  const { isInView } = useTargetInView(target);
  const isInViewRef = useRef(isInView);

  useEffect(() => {
    isInViewRef.current = isInView;
    triggerSection();
  }, [isInView]);

  const triggerSection = () => {
    if (target.current) {
      const boundRect = (target.current as HTMLElement).getBoundingClientRect();
      const headerBoundRect = document.getElementsByTagName('header').item(0)?.getBoundingClientRect();
      if (isInViewRef.current && headerBoundRect && boundRect.y < headerBoundRect.bottom) {
        setActiveSection('benefits')
      } else {
        removeActiveSection('benefits');
      }
    }
  }

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

  const { isMobile, isTablet } = useCheckIsMobile();

  return (
    <div ref={target}>
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
          <li className={styles.listItem}>
            <h4 className={styles.smallTitle}>
              Improve team dynamics and company culture
            </h4>
            <p className={styles.text}>
              The incentives of the system are extremely pro-social: You become
              valuable through serving others. The somewhat ironic benefit of
              using a peer-ranking system is that each individual will tend to
              have more appreciation for their peers as a result of ranking them.
              Plus, better understanding of one’s own value helps morale.
            </p>
          </li>

          <li className={styles.listItem}>
            <h4 className={styles.smallTitle}>
              Align your labor <br /> spend with your business goals
            </h4>
            <p className={styles.text}>
              Remember Moneyball? With The INFIN, you may just find out that your
              lowest-paid employees are getting you the highest ROI. Find out if
              you’re investing in the right people.
            </p>
          </li>

          <li className={styles.listItem}>
            <h4 className={styles.smallTitle}>
              Find true leadership and build on it
            </h4>
            <p className={styles.text}>
              Who knew that Cathy from accounting was the glue holding the office
              together? Or that Jim the janitor is the king of initiative. Or that
              Sarah, with her impressive sales numbers, actually undermines
              everyone else in the organization.  In team-focused environments,
              it’s hard to identify true leaders. Yet doing so builds strong,
              enduring companies.
            </p>
          </li>

          <li className={styles.listItem}>
            <h4 className={styles.smallTitle}>
              Automatically distribute bonuses and compensation pools
            </h4>
            <p className={styles.text}>
              Set the pool amount and let the team allocate it amongst themselves.
              Get rid of the sideways glances come bonus distribution time. Each
              employee will have a realistic picture of their value, recognition
              for their contribution, and helpful feedback for improvement.
            </p>
          </li>
        </ul>
        {isTablet ? (
          <PlusesIconMobile className={styles.plusesIconMobile} />
        ) : (
          <PlusesIcon className={styles.plusesIcon} />
        )}
      </Section>
    </div>
  );
}
