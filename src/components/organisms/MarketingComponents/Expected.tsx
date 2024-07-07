'use client';

import React, { useState } from 'react';
import styles from '../../../styles/components/organisms/Marketing/Expected.module.scss';

import { Section } from '@/components/atoms/Section';
import { AppContext, IAppContext } from '@/context/app.context';
import PlusesSmall from '/public/icons/pluses-small.svg';
import PlusesIcon from '/public/icons/plus.svg';
import Cursor from '@/components/atoms/Cursor';
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
  const [cursorVisibility, setCursorVisibility] = useState<'block' | 'none'>(
    'none',
  );

  const handleMouseEnter = () => {
    console.log('expected', 'block');
    setCursorVisibility('block');
  };

  const handleMouseLeave = () => {
    console.log('expected', 'none');
    setCursorVisibility('none');
  };

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
      <div id="home_wrapper" className={styles.wrapper}>
        <Cursor cursorDisplay={cursorVisibility} className={styles.pluses} />
        <div className={styles.topBlock}>
          <p className={styles.smallText}>Expected outcomes</p>

          <div className={styles.titleBox}>
            <p className={styles.bigText}>{blocks[3].title}</p>
          </div>
        </div>

        <ul className={styles.list}>
          {blocks[3].step.map((item, index) => (
            <li className={styles.listItem} key={index}>
              <div className={styles.listNumber}>0{item.stepNumber}</div>
              <p className={styles.listText}>{item.content}</p>
            </li>
          ))}
        </ul>
        <PlusesIcon className={styles.plusIcon} />
      </div>
    </Section>
  );
}
