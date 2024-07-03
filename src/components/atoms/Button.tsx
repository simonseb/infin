import React from 'react';

import clsx from 'clsx';
import styles from '../../styles/components/atoms/Button.module.scss';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  appearance: 'primary' | 'ghost' | 'light' | 'accent';
}

export const Button = ({
  children,
  appearance,
  className,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={clsx(
        styles.button,
        {
          [styles.primary]: appearance === 'primary',
          [styles.ghost]: appearance === 'ghost',
          [styles.light]: appearance === 'light',
          [styles.accent]: appearance === 'accent',
        },
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
