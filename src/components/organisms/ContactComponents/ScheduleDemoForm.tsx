'use clien';

import React, { DetailedHTMLProps, HTMLAttributes, useState } from 'react';
import styles from '../../../styles/components/organisms/Contact/ScheduleDemoForm.module.scss';
import clsx from 'clsx';

import PhoneInput from 'react-phone-input-2';

import { Controller, useForm } from 'react-hook-form';
import { Input } from '@/components/atoms/Input';
import { Button } from '@/components/atoms/Button';

interface ScheduleDemoFormProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  className: string;
}

interface IScheduleDemoForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  jobTitle: string;
  company: string;
  employees: number;
}

export default function ScheduleDemoForm({
  className,
  ...props
}: ScheduleDemoFormProps) {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<IScheduleDemoForm>();

  console.log(errors);

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
      <div className={styles.labelBox}>
        <label className={styles.label}>
          First name <span className={styles.labelAccent}>*</span>
          <Input
            {...register('firstName', {
              required: true,
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
              required: true,
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
            required: true,
          })}
          placeholder="Enter your business email"
          className={styles.input}
          error={errors.email}
        />
      </label>

      <label className={styles.label}>
        Phone number <span className={styles.labelAccent}>*</span>
        <Controller
          control={control}
          name="phone"
          rules={{ required: true }}
          render={({ field: { ...field } }) => (
            <PhoneInput
              {...field}
              inputProps={{
                name: 'phone',
                required: true,
              }}
              specialLabel={''}
              countryCodeEditable={false}
              placeholder="Enter phone number"
              containerClass={styles.containerClass}
              inputClass={styles.inputClass}
              buttonClass={styles.buttonClass}
              dropdownClass={styles.dropdownClass}
            />
          )}
        />
      </label>

      <label className={styles.label}>
        Job Title <span className={styles.labelAccent}>*</span>
        <Input
          {...register('jobTitle', {
            required: true,
          })}
          placeholder="Enter your current job title"
          className={styles.input}
          error={errors.jobTitle}
        />
      </label>

      <div className={styles.labelBox}>
        <label className={styles.label}>
          Company name <span className={styles.labelAccent}>*</span>
          <Input
            {...register('company', {
              required: true,
            })}
            placeholder="Enter the name of company"
            className={styles.input}
            error={errors.company}
          />
        </label>

        <label className={styles.label}>
          Employees <span className={styles.labelAccent}>*</span>
          <Input
            {...register('employees', {
              required: true,
            })}
            placeholder="51 - 100"
            className={styles.input}
            error={errors.employees}
          />
        </label>
      </div>

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
