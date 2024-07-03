import React from 'react';
import styles from '../../../styles/components/organisms/Contact/ScheduleDemo.module.scss';

interface ScheduleDemoProps {}

export default function ScheduleDemo({}: ScheduleDemoProps) {
  return (
    <div className={styles.description}>
      <h3 className={styles.title}>
        Unlock the <br className={styles.titlebBr} /> full potential of your
        team
      </h3>

      <ul className={styles.rowList}>
        <li>Ready to experience the power of The INFIN?</li>
        <li>Schedule a personalized demo with one of our experts today</li>
        <li>and discover how our platform can transform your workplace.</li>
      </ul>

      <p className={styles.smallTitle}>During the demo, you will</p>
      <ul className={styles.rowsListSmall}>
        <li>
          Explore key features tailored to your organization&apos;s needs.
        </li>
        <li>
          Learn how The INFIN fosters transparency and fairness in recognition
          and rewards.
        </li>
        <li>
          See how our real-time data insights can drive informed
          decision-making.
        </li>
      </ul>

      <p className={styles.bottomText}>
        Don&apos;t miss out on this opportunity to revolutionize the way you
        recognize and reward contributions within your team. Fill out the form
        to the right, and we&apos;ll reach out to schedule your demo at a
        convenient time for you.
      </p>
    </div>
  );
}
