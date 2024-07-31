import React from 'react';
import styles from '../../../styles/components/organisms/Blog/Hero_New.module.scss';


export default function Hero_New() {
  
  return (
    <div className={styles.section}>
      <div className={styles.topBlock}>
          <p className={styles.smallText}>11 Jan 2022   •   5 min read</p>
          <h2 className={styles.title}>THE INFIN BLOG</h2>
      </div>
    </div>
  );
}
