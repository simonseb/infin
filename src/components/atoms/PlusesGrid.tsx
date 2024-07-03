import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from '../../styles/components/atoms/PlusesGrid.module.scss';
import clsx from 'clsx';

import PlusIcon from '../../../public/icons/plus.svg';

interface PlusesGridProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

export default function PlusesGrid({ className, ...props }: PlusesGridProps) {
  return (
    <div className={clsx(styles.grid, className)} {...props}>
      <PlusIcon />
      <PlusIcon />
      <PlusIcon />
      <PlusIcon />
      <PlusIcon />
      <PlusIcon />
      <PlusIcon />
      <PlusIcon />
      <PlusIcon />
      <PlusIcon />
      <PlusIcon />
      <PlusIcon />
      <PlusIcon />
      <PlusIcon />
      <PlusIcon />
      <PlusIcon />
      <PlusIcon />
      <PlusIcon />
      <PlusIcon />
      <PlusIcon />
      <PlusIcon />
      <PlusIcon />
      <PlusIcon />
      <PlusIcon />
      <PlusIcon />
      <PlusIcon />
      <PlusIcon />
      <PlusIcon />
      <PlusIcon />
      <PlusIcon />
    </div>
  );
}
