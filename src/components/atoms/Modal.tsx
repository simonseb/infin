import React, {
  DetailedHTMLProps,
  Dispatch,
  HTMLAttributes,
  SetStateAction,
} from 'react';
import styles from '../../styles/components/atoms/Modal.module.scss';
import clsx from 'clsx';

interface ModalProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  classBackdrop?: string;
  classModal?: string;
  children: React.ReactElement;
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}

export default function Modal({
  classBackdrop,
  classModal,
  active,
  setActive,
  children,
  ...props
}: ModalProps) {
  return (
    <div
      className={clsx(
        styles.modal,
        {
          [styles.active]: active,
        },
        classBackdrop,
      )}
      onClick={() => setActive(false)}
      {...props}
    >
      <div
        className={clsx(
          styles.content,
          {
            [styles.contentActive]: active,
          },
          classModal,
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
