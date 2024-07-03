'use client';

import React, {
  DetailedHTMLProps,
  HTMLAttributes,
  useEffect,
  useState,
} from 'react';
import styles from '../../styles/components/atoms/Cursor.module.scss';
import clsx from 'clsx';

export interface CursorProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  cursorDisplay: 'block' | 'none';
}

export default function Cursor({
  cursorDisplay,
  className,
  ...props
}: CursorProps) {
  const [cursor, setCursor] = useState<{
    x: number;
    y: number;
  }>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setTimeout(() => {
        setCursor({
          x: e.clientX,
          y: e.clientY,
        });
      }, 100);
    };
    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  return (
    <div
      style={{
        left: cursor.x + 'px',
        top: cursor.y + 'px',
        display: cursorDisplay,
      }}
      className={clsx(styles.cursor, className)}
      {...props}
    ></div>
  );
}
