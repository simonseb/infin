import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';
import { ForwardedRef, forwardRef } from 'react';

import styles from '../../styles/components/atoms/Input.module.scss';
import clsx from 'clsx';

export interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  error?: FieldError;
  placeholder?: string;
}

const InputComponent = (
  { className, placeholder, error, ...props }: InputProps,
  ref: ForwardedRef<HTMLInputElement>,
): JSX.Element => {
  return (
    <div className={clsx(styles.inputWrapper, className)}>
      <input
        placeholder={placeholder}
        className={clsx(styles.input, {
          [styles.error]: error,
        })}
        ref={ref}
        {...props}
      />
      {error && <span className={styles.errorMessage}>{error.message}</span>}
    </div>
  );
};

export const Input = forwardRef(InputComponent);
