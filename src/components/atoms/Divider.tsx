import styles from '../../styles/components/atoms/Divider.module.scss';
import clsx from 'clsx';

import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface DividerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLHRElement>, HTMLHRElement> {}

export const Divider = ({ className, ...props }: DividerProps): JSX.Element => {
  return <hr className={clsx(styles.hr, className)} {...props} />;
};
