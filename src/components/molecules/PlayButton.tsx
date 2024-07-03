import React from 'react';
import styles from '../../styles/components/molecules/PlayButton.module.scss';

import PlayIcon from '../../../public/icons/play.svg';
import { Button } from '../atoms/Button';
import clsx from 'clsx';

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
        <PlayIcon />
      </div>
    </Button>
  );
}
