'use client';

import React, { DetailedHTMLProps, HTMLAttributes, useState } from 'react';
import styles from '../../../styles/components/organisms/Contact/GetInTouchForm.module.scss';
import clsx from 'clsx';

import { useForm } from 'react-hook-form';
import { Input } from '@/components/atoms/Input';
import { Button } from '@/components/atoms/Button';
import { TextArea } from '@/components/atoms/TextArea';

interface GetInTouchFormProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  className: string;
}

interface IScheduleDemoForm {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export default function GetInTouchForm({
  className,
  ...props
}: GetInTouchFormProps) {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<IScheduleDemoForm>();

  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const onSubmit = async (data: IScheduleDemoForm) => {
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={clsx(styles.form, className)}
      {...props}
    >
      <div className={styles.nameBox}>
        <label className={styles.label}>
          First name <span className={styles.labelAccent}>*</span>
          <Input
            {...register('firstName', {
              required: { value: true, message: '' },
            })}
            className={styles.input}
            placeholder="Enter your first name"
            error={errors.firstName}
          />
        </label>

        <label className={styles.label}>
          Last name <span className={styles.labelAccent}>*</span>
          <Input
            {...register('lastName', {
              required: { value: true, message: '' },
            })}
            placeholder="Enter your last name"
            className={styles.input}
            error={errors.lastName}
          />
        </label>
      </div>

      <label className={styles.label}>
        Business email <span className={styles.labelAccent}>*</span>
        <Input
          {...register('email', {
            required: { value: true, message: '' },
          })}
          placeholder="Enter your business email"
          className={styles.input}
          error={errors.email}
        />
      </label>

      <label className={styles.label}>
        Message <span className={styles.labelAccent}>*</span>
        <TextArea
          {...register('message', {
            required: { value: true, message: '' },
          })}
          placeholder="Enter the message you want to share with us"
          className={styles.textarea}
          error={errors.message}
        />
      </label>

      <Button
        appearance="primary"
        type="submit"
        className={styles.submitBtn}
        disabled={!isValid}
      >
        GET STARTED
      </Button>
    </form>
  );
}
