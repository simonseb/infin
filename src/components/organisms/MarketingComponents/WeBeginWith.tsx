'use client';

import React, { useContext, useRef, useEffect } from 'react';
import styles from '../../../styles/components/organisms/Marketing/WeBeginWith.module.scss';
import { AppContext, IAppContext } from '@/context/app.context';
import useTargetInView from '@/hooks/useTargetInView';
import { Section } from '@/components/atoms/Section';
import { Button } from '@/components/atoms/Button';
import { useRouter } from 'next/navigation';

interface WeBeginWithProps { }

export default function WeBeginWith({ }: WeBeginWithProps) {
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

  return (
    <div ref={target}>
      <Section type="ghost" className={styles.section}>
        <p className={styles.underTitle}>Align incentives with impact</p>

        <h2 className={styles.title}>
          We begin with a facilitated roll out of The INFIN for the{' '}
          <span>leadership team.</span>
        </h2>

        <div className={styles.wrapper}>
          <p className={styles.bigText}>
            Once enough data points have been gathered, we can proceed to data
            interpretation and coaching for team performance. This gives a flavor
            of the full experience to the executives, so they are able to better
            engage with a broader roll-out.
            <br />
            <br />
            We will also collaborate on developing a compensation & incentive
            program that reflects actual value distribution.
            <br />
            <br />
            This will be followed by the development of a communication plan and a
            facilitated roll-out to the broader organization, with multi-phase
            support.
            <br />
            <br />
            Because of the beta, you will be receiving significantly more support
            and customization than a typical consulting engagement. For example,
            feature requests and program updates can be implemented quickly and
            seamlessly, often with daily releases.
          </p>

          <div className={styles.listBox}>
            <p className={styles.listTitle}>
              For the duration of the engagement, you will be personally supported
              in your operational effectiveness with:
            </p>

            <ul className={styles.list}>
              <li className={styles.listItem}>Robust data analystics.</li>
              <li className={styles.listItem}>
                Personalized coaching and recommendations.
              </li>
              <li className={styles.listItem}>
                Ongoing utilization support based on The INFIN data and your
                company&apos;s specific needs.
              </li>
              <li className={styles.listItem}>
                Custom financial perfomance analytics.
              </li>
              <li className={styles.listItem}>
                Identification of productivity epicenters and voids.
              </li>
              <li className={styles.listItem}>Cost saving recommendations.</li>
              <li className={styles.listItem}>
                Actionable productivity enchancement measures.
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.buttonBox}>
          <Button
            className={styles.button}
            appearance="accent"
            onClick={() => router.push('/contact')}
          >
            Schedule a call
          </Button>

          <p className={styles.buttonText}>
            If you would like to be one of the beta clients of this service,
            please schedule a discovery call.
          </p>
        </div>
      </Section>
    </div>
  );
}
