import React from 'react';
import styles from '../../../styles/components/organisms/Contact/GetInTouch.module.scss';

interface GetInTouchProps {
  touch: ITouch[] | undefined;
}

interface ITouch {
  title: string;
  text: string;
}

export default function GetInTouch({ touch }: GetInTouchProps) {
  if (!touch) {
    return null;
  }

  return (
    <div className={styles.description}>
      <h3 className={styles.title}>{touch[0].title}</h3>

      <ul>
        {/* <li>Have questions, feedback, or need assistance?</li>
        <li>We&apos;re here to help! Fill out the form on your right side,</li>
        <li>and we&apos;ll get back to you as soon as possible.</li> */}
        {/* {touch[0].text} */}
        <li>{touch[0].text.split('?')[0] + '?'}</li>
        <li>{touch[0].text.split('?')[1].split(',')[0] + ','}</li>
        <li>{touch[0].text.split('?')[1].split(',')[1]}</li>
      </ul>
    </div>
  );
}
