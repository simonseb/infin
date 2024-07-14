import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from '../../../styles/components/organisms/Individuals/HowWorks.module.scss';

import PlusIcon from '/public/icons/plus.svg';
import { Section } from '@/components/atoms/Section';
import gsap from 'gsap';

interface IDividualData {
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

interface HowWorksProps {
  data?: [IDividualData] | undefined;
}

export default function HowWorks({ data }: HowWorksProps) {
  const steps = useRef<HTMLUListElement>(null);
  const underline = useRef<HTMLHRElement>(null);

  const [screenWidth, setScreenWidth] = useState(innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => setScreenWidth(innerWidth));

    return window.removeEventListener('resize', () =>
      setScreenWidth(innerWidth),
    );
  }, []);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray('.panel');
      let underlines = gsap.utils.toArray('.underline');

      gsap.to(underlines, {
        xPercent: 193 * (panels.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: steps.current,
          pin: screenWidth <= 1080 ? true : '.container',
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
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
              if (left < 30) {
                num = 0;
              } else if (left < 65) {
                num = 1;
              } else if (left < 100) {
                num = 2;
              }

              for (let i = 0; i < 3; i++) {
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

  if (!data) {
    return null;
  }

  const { attributes } = data[0];

  if (!attributes) {
    return null;
  }

  const { blocks = [] } = attributes;
  return (
    <Section type="filled" className={styles.section + ' container'}>
      <div className={styles.topBlock}>
        <p className={styles.smallText}>{blocks[0].title || ''}</p>

        <h3 className={styles.title}>
          <p>How The INFIN </p>
          <p>works is simple</p>
        </h3>
      </div>

      <ul className={styles.list} ref={steps} style={{ position: 'relative' }}>
        <hr
          style={{
            position: 'absolute',
            top: '37%',
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

        {blocks[1].step.map((item, index) => (
          <li className={styles.listItem + ' panel'} key={index}>
            <div
              className={styles.listItemNumber}
              id={`panel${index}`}
              style={{ color: 'black' }}
            >
              0{item.stepNumber}
            </div>
            <p className={styles.listItemText}>{item.content}</p>
          </li>
        ))}
      </ul>
      <PlusIcon className={styles.plusIcon} />
    </Section>
  );
}
