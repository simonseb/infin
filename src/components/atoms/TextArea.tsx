import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';
import { ForwardedRef, forwardRef } from 'react';

import styles from '../../styles/components/atoms/TextArea.module.scss';
import clsx from 'clsx';

export interface TextAreaProps
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  error?: FieldError;
  placeholder: string;
}

const TextAreaComponent = (
  { className, placeholder, error, ...props }: TextAreaProps,
  ref: ForwardedRef<HTMLTextAreaElement>,
): JSX.Element => {
  return (
    <div className={clsx(styles.textareaWrapper, className)}>
      <textarea
        placeholder={placeholder}
        className={clsx(styles.textarea, {
          [styles.error]: error,
        })}
        ref={ref}
        {...props}
      />
      {/* {error && <span className={styles.errorMessage}>{error.message}</span>} */}
    </div>
  );
};

export const TextArea = forwardRef(TextAreaComponent);
