import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from '../../styles/components/molecules/Switcher.module.scss';
import clsx from 'clsx';

import { colors } from '@/lib/constants';

interface SwitcherProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className: string;
  isActive: 'left' | 'right';
  leftButtonClick: () => void;
  rightButtonClick: () => void;
}

export default function Switcher({
  className,
  isActive,
  leftButtonClick,
  rightButtonClick,
  ...props
}: SwitcherProps) {
  const { accent } = colors;

  return (
    <div className={clsx(styles.switcher, className)} {...props}>
      <button
        type="button"
        className={styles.leftButton}
        onClick={leftButtonClick}
        style={{
          background: isActive === 'left' ? accent : '#FFFFFF00',
          fontWeight: isActive === 'left' ? 600 : 500,
        }}
      >
        Schedule a demo
      </button>
      <button
        type="button"
        className={styles.rightButton}
        onClick={rightButtonClick}
        style={{
          background: isActive === 'right' ? accent : '#FFFFFF00',
          fontWeight: isActive === 'right' ? 600 : 500,
        }}
      >
        Get in touch
      </button>
    </div>
  );
}
