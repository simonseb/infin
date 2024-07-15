'use client';

import React from 'react';
import styles from '../../styles/components/atoms/ButtonMenu.module.scss';

import BurgerIcon from '../../../public/icons/burger-menu.svg';
import CloseIcon from '../../../public/icons/close.svg';

import Image from 'next/image';

import { usePathname } from 'next/navigation';

interface ButtonMenuProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isOpen: boolean;
  setIsOpen: () => void;
}

export default function ButtonMenu({
  isOpen,
  setIsOpen,
  ...props
}: ButtonMenuProps) {
  const pathname = usePathname();

  const calculateBorderColor = () => {
    if (isOpen) {
      return '#c1c1c1';
    } else {
      if (pathname === '/contact') {
        return '#ffffff29';
      } else {
        return '#12121229';
      }
    }
  };

  return (
    <button
      type="button"
      className={styles.buttonMenu}
      onClick={setIsOpen}
      style={{
        backgroundColor: isOpen ? '#c1c1c1' : 'transparent',
        borderColor: calculateBorderColor(),
      }}
      {...props}
    >
      {isOpen ? (
        <Image
          src="/icons/close.svg"
          width={100}
          height={100}
          alt={'closeIcon'}
        />
      ) : (
        <Image
          src="/icons/burger-menu.svg"
          width={100}
          height={100}
          alt={'burgerMenu'}
          style={{ stroke: pathname === '/contact' ? '#fff' : '#121212' }}
        />
      )}
    </button>
  );
}
