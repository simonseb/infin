import React from 'react';
import styles from '../../styles/components/molecules/PlayButton.module.scss';

import PlayIcon from '../../../public/icons/play.svg';
import { Button } from '../atoms/Button';
import clsx from 'clsx';
import Image from 'next/image';

interface PlayButtonProps {
  className: string;
  onClick?: () => void;
}

export default function PlayButton({
  className,
  onClick,
  ...props
}: PlayButtonProps) {
  return (
    <Button
      appearance="primary"
      type="button"
      className={clsx(styles.button, className)}
      onClick={onClick}
      {...props}
    >
      <span className={styles.buttonText}>Play</span>
      <div className={styles.buttonCircle}>
        <Image
          src="/icons/play.svg"
          width={50}
          height={50}
          alt={'playbutton'}
          className={styles.plusesIconMobile}
          id="iconmobile"
        />
        {/* <PlayIcon /> */}
      </div>
    </Button>
  );
}
