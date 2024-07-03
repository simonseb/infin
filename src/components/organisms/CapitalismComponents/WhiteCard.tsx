import React from 'react';
import styles from '../../../styles/components/organisms/Capitalism/WhiteCard.module.scss';

import PlusIcon from '../../../../public/icons/plus.svg';

import { Section } from '@/components/atoms/Section';

interface WhiteCardProps {}

export default function WhiteCard({}: WhiteCardProps) {
  return (
    <Section type="filled" className={styles.section}>
      <div className={styles.leftBlock}>
        <p className={styles.smallText}>Aligns reward with contribution</p>
      </div>

      <div className={styles.rightBlock}>
        <div className={styles.titleBox}>
          <h3 className={styles.title}>
            <span>Capitalism 2.0</span> aligns reward with contribution.
          </h3>

          <PlusIcon className={styles.plusIcon}></PlusIcon>
        </div>

        <p className={styles.text}>
          And it’s not a top-down approach. Only when each team member, each
          person involved in the production process gets a voice in upholding
          accountability and influencing the reward structures, can Capitalism
          2.0 take firm roots and provide its benefits to everyone contributing
          to the overall success of a team, company, or organization. 
        </p>
      </div>
    </Section>
  );
}
