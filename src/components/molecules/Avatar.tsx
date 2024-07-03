import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from '../../styles/components/molecules/Avatar.module.scss';
import clsx from 'clsx';

import Image from 'next/image';

interface AvatarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
  name: string;
  position: string;
  imageSrc: string;
}

export default function Avatar({
  className,
  name,
  position,
  imageSrc,
  ...props
}: AvatarProps) {
  return (
    <div className={clsx(styles.avatar, className)} {...props}>
      <Image
        className={styles.image}
        src={imageSrc}
        alt={name}
        width={52}
        height={52}
      />

      <div>
        <p className={styles.position}>{position}</p>
        <p className={styles.name}>{name}</p>
      </div>
    </div>
  );
}
