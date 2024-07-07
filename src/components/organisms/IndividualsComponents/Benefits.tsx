'use client';

import React, { useContext, useRef, useEffect } from 'react';
import styles from '../../../styles/components/organisms/Individuals/Benefits.module.scss';
import { AppContext, IAppContext } from '@/context/app.context';
import PlusesIcon from '../../../../public/icons/benefits-pluses.svg';
import PlusesIconMobile from '../../../../public/icons/benefits-pluses-mobile.svg';
import useTargetInView from '@/hooks/useTargetInView';
import { Section } from '../../atoms/Section';
import { CardTitle } from '../../molecules/CardTitle';
import useCheckIsMobile from '@/hooks/useCheckIsMobile';

interface BenefitsProps { }

export default function Benefits({ }: BenefitsProps) {
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
      const headerBoundRect = document.getElementsByTagName('header').item(0)?.getBoundingClientRect();
      if (isInViewRef.current && headerBoundRect && boundRect.y < headerBoundRect.bottom) {
        setActiveSection('benefits')
      } else {
        removeActiveSection('benefits');
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
      <Section type="filled" className={styles.benefits}>
        <div className={styles.leftBlock}>
          <CardTitle
            className={styles.cardTitle}
            showNumber={isMobile}
            showTitle={false}
            cardNumber="03"
          />

          <h3 className={styles.title}>
            As such,
            <br />
            <span className={styles.titleAccent}>The INFIN</span>
          </h3>
        </div>

        <ul className={styles.list}>
          <li className={styles.listItem}>
            <h4 className={styles.smallTitle}>Gives you a powerful voice</h4>
            <p className={styles.text}>
              If five different managers are making you write TPS reports and
              someone keeps stealing your stapler, you have the voice in
              confidentially rating them, as you do with those performing their
              job brilliantly.
            </p>
          </li>

          <li className={styles.listItem}>
            <h4 className={styles.smallTitle}>Cuts through office politics</h4>
            <p className={styles.text}>
              Imagine your bonus being determined by your value rather than by
              guesswork about which part of the team’s success was due to your
              work. Get the boss to see how much you contribute to the company.
              Your reputation is supported by data, which is more objective and
              dynamic in showing your true worth.
            </p>
          </li>

          <li className={styles.listItem}>
            <h4 className={styles.smallTitle}>
              Puts you in control of your career
            </h4>
            <p className={styles.text}>
              Not only does your personal profile act as a resume of your value,
              but it also lets you see the blindspots and improve them for faster
              advancement. And it certainly doesn’t hurt to show your boss your
              top ranking come promotion time. In essence, your profile can help
              you earn more and make a greater impact.
            </p>
          </li>

          <li className={styles.listItem}>
            <h4 className={styles.smallTitle}>
              Creates a more considerate office environment
            </h4>
            <p className={styles.text}>
              Who knew that having a bit of power over your coworkers would make
              them nicer to you? You may also notice your task request being
              ignored a whole lot less. Cooperation is a wonderful thing.
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
