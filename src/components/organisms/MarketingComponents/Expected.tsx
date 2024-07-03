'use client';

import React, { useState } from 'react';
import styles from '../../../styles/components/organisms/Marketing/Expected.module.scss';

import { Section } from '@/components/atoms/Section';
import { AppContext, IAppContext } from '@/context/app.context';
import PlusesGrid from '@/components/atoms/PlusesGrid';
import PlusesSmall from '/public/icons/pluses-small.svg';
import PlusesIcon from '/public/icons/plus.svg';
import Cursor from '@/components/atoms/Cursor';

interface ExpectedProps { }

export default function Expected({ }: ExpectedProps) {
  const [cursorVisibility, setCursorVisibility] = useState<'block' | 'none'>('none');

  const handleMouseEnter = () => {
    console.log('expected', 'block');
    setCursorVisibility('block');
  };

  const handleMouseLeave = () => {
    console.log('expected', 'none');
    setCursorVisibility('none');
  };
  return (
    <Section id="expected" type="filled" className={styles.section}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <div id='home_wrapper' className={styles.wrapper}>
        <Cursor cursorDisplay={cursorVisibility} className={styles.pluses} />
        <div className={styles.topBlock}>
          <p className={styles.smallText}>Expected outcomes</p>

          <div className={styles.titleBox}>
            <p className={styles.bigText}>
              At the end of the consultancy, you should expect actionable insight
              into improving your organization’s bottom line as well as its return
              on human capital. Specifically, together we can use the data to help
              you with:
            </p>
          </div>
        </div>

        <ul className={styles.list}>
          <li className={styles.listItem}>
            <div className={styles.listNumber}>01</div>
            <p className={styles.listText}>
              Aligning your labor spend with your business goals by investing in
              the right people at the right time.
            </p>
          </li>

          <li className={styles.listItem}>
            <div className={styles.listNumber}>02</div>
            <p className={styles.listText}>
              Better distribution of bonuses and compensation pools with each
              employee having a realistic picture of their value, recognition for
              their contribution, and helpful feedback for improvement.
            </p>
          </li>

          <li className={styles.listItem}>
            <div className={styles.listNumber}>03</div>
            <p className={styles.listText}>
              Improved team dynamics and company culture, with a deeper
              appreciation for each other among team members.
            </p>
          </li>

          <li className={styles.listItem}>
            <div className={styles.listNumber}>04</div>
            <p className={styles.listText}>
              Recognition of true leadership <br className={styles.listBr} /> (not
              just by title) within the organization and building around them.
            </p>
          </li>

          <li className={styles.listItem}>
            <div className={styles.listNumber}>05</div>
            <p className={styles.listText}>
              A clear picture of performance trends on all levels.
            </p>
          </li>
        </ul>
        <PlusesIcon className={styles.plusIcon} />
      </div>
    </Section>
  );
}
