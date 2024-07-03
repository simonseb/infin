import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

import styles from '../../styles/components/atoms/Section.module.scss';
import clsx from 'clsx';

interface SectionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  type: 'filled' | 'ghost';
  numb?: string;
  shortTitle?: string;
}

export const Section = ({
  children,
  type,
  numb,
  shortTitle,
  className,
  ...props
}: SectionProps) => {
  return (
    <section
      className={clsx(
        styles.section,
        {
          [styles.filled]: type === 'filled',
          [styles.ghost]: type === 'ghost',
        },
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
};
