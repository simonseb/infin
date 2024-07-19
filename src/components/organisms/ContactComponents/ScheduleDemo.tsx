import React from 'react';
import styles from '../../../styles/components/organisms/Contact/ScheduleDemo.module.scss';

interface ScheduleDemoProps {
  demo: IDemo[] | undefined;
}
interface IDemo {
  title: string;
  text: string;
}

export default function ScheduleDemo({ demo }: ScheduleDemoProps) {
  if (!demo) {
    return null;
  }

  return (
    <div className={styles.description}>
      <h3 className={styles.title}>{demo[0].title}</h3>

      <ul className={styles.rowList}>
        {/* <li>Ready to experience the power of The INFIN?</li>
        <li>Schedule a personalized demo with one of our experts today</li>
        <li>and discover how our platform can transform your workplace.</li> */}
        {/* {demo[0].text} */}
        <li>{demo[0].text.split('?')[0] + '?'}</li>
        <li>{demo[0].text.split('?')[1].split('today')[0] + 'today'}</li>
        <li>{demo[0].text.split('?')[1].split('today')[1]}</li>
      </ul>

      <p className={styles.smallTitle}>{demo[1].title}</p>
      <ul className={styles.rowsListSmall}>
        {/* <li>
          Explore key features tailored to your organization&apos;s needs.
        </li>
        <li>
          Learn how The INFIN fosters transparency and fairness in recognition
          and rewards.
        </li>
        <li>
          See how our real-time data insights can drive informed
          decision-making.
        </li> */}
        {demo[1].text}
      </ul>

      <p className={styles.bottomText}>{demo[2].text}</p>
    </div>
  );
}
