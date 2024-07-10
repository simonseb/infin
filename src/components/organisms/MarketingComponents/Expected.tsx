'use client';

import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from '../../../styles/components/organisms/Marketing/Expected.module.scss';

import { Section } from '@/components/atoms/Section';
import PlusesIcon from '/public/icons/plus.svg';
import Cursor from '@/components/atoms/Cursor';
import gsap from 'gsap';

interface IMarketing {
  attributes?: {
    blocks: {
      title: string;
      step: {
        content: string;
        stepNumber: string;
      }[];
    }[];
  };
}
interface ExpectedProps {
  data?: IMarketing[] | undefined;
}

export default function Expected({ data }: ExpectedProps) {
  const steps = useRef<HTMLUListElement>(null);
  const underline = useRef<HTMLHRElement>(null);

  const [screenWidth, setScreenWidth] = useState(innerWidth);

  const [cursorVisibility, setCursorVisibility] = useState<'block' | 'none'>(
    'none',
  );

  const handleMouseEnter = () => {
    setCursorVisibility('block');
  };

  const handleMouseLeave = () => {
    setCursorVisibility('none');
  };



  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray('.panel');
      let underlines = gsap.utils.toArray('.underline');

      gsap.to(underlines, {
        xPercent: 100 * (panels.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: steps.current,
          pin: '.container',
          scrub: 1,
          start: 'bottom bottom',
          end: () => '+=' + steps.current?.offsetWidth,
          onUpdate: () => {
            if (underline.current) {
              const elementStyle = getComputedStyle(underline.current);
              const matrix = elementStyle.transform;
              const left =
                (parseFloat(matrix.split(',')[4]) /
                  ((steps.current?.clientWidth as number) - 80)) *
                100;
              let num = 0;
              if (left < 15) {
                num = 0;
              } else if (left < 35 && left >= 15) {
                num = 1;
              } else if (left < 55 && left >= 35) {
                num = 2;
              } else if (left < 70 && left >= 55) {
                num = 3;
              } else if (left >= 70) {
                num = 4;
              }

              for (let i = 0; i < 5; i++) {
                const panel: any = document.getElementById(`panel${i}`);
                if (panel) {
                  panel.style.color = i === num ? '#ffcd00' : 'black';
                  panel.style.borderBottom =
                    i === num ? '2px solid black' : '2px solid white';
                }
              }
            }
          },
        },
      });
    }, document.body);

    return () => ctx.revert();
  });

  useEffect(() => {
    window.addEventListener('resize', () => setScreenWidth(innerWidth));

    return window.removeEventListener('resize', () =>
      setScreenWidth(innerWidth),
    );
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
    <Section
      id="expected"
      type="filled"
      className={styles.section}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div id="home_wrapper" className={styles.wrapper + ' container'}>
        <Cursor cursorDisplay={cursorVisibility} className={styles.pluses} />
        <div className={styles.topBlock}>
          <p className={styles.smallText}>Expected outcomes</p>

          <div className={styles.titleBox}>
            <p className={styles.bigText}>{blocks[3].title}</p>
          </div>
        </div>

        <ul
          className={styles.list}
          ref={steps}
          style={{ position: 'relative' }}
        >
          <hr
            style={{
              position: 'absolute',
              top: '39%',
              width: '20%',
              opacity: 0,
            }}
            className="underline"
            ref={underline}
          />
          <hr
            style={{
              position: 'absolute',
              top: '39%',
              width: '100%',
              opacity: screenWidth <= 1080 ? 0 : 0.3,
            }}
          />
          {blocks[3].step.map((item, index) => (
            <li className={styles.listItem + ' panel'} key={index}>
              <div
                className={styles.listItemNumber}
                id={`panel${index}`}
                style={{ color: 'black' }}
              >
                0{item.stepNumber}
              </div>
              <p className={styles.listText}>{item.content}</p>
            </li>
          ))}
        </ul>
        <PlusesIcon className={styles.plusIcon} />
      </div>
    </Section>
  );
}
