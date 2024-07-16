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
  color: string;
}

export default function ButtonMenu({
  isOpen,
  setIsOpen,
  color,
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
          width={24}
          height={24}
          alt={'closeIcon'}
        />
      ) : (
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill={color}
          xmlns="http://www.w3.org/2000/svg"
          style={{ transition: '.5s' }}
        >
          <path d="M5 6.5H19V8H5V6.5Z" />
          <path d="M5 16.5H19V18H5V16.5Z" />
          <path d="M5 11.5H19V13H5V11.5Z" />
        </svg>
      )}
    </button>
  );
}
