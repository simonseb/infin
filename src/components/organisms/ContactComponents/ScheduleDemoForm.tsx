'use clien';

import React, {
  DetailedHTMLProps,
  HTMLAttributes,
  useEffect,
  useState,
} from 'react';
import styles from '../../../styles/components/organisms/Contact/ScheduleDemoForm.module.scss';
import clsx from 'clsx';

import PhoneInput from 'react-phone-input-2';

import { Controller, useForm } from 'react-hook-form';
import { Input } from '@/components/atoms/Input';
import { Button } from '@/components/atoms/Button';
import { validateFormDemo } from '@/lib/validation';
import { sendEmail } from '@/lib/strapi/strapi-fetch';
import Modal from '@/components/atoms/Modal';

interface ScheduleDemoFormProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  className: string;
  to: string;
}

interface IScheduleDemoForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  jobTitle: string;
  company: string;
  employees: string;
}

export default function ScheduleDemoForm({
  className,
  to,
  ...props
}: ScheduleDemoFormProps) {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<IScheduleDemoForm>();

  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setError] = useState<any>({});
  const [isModal, setIsModal] = useState(false);

  function adjustTopPosition() {
    const textElement = document.getElementById('modal-1');
    const scrollTop = window.scrollY;
    const viewportHeight = window.innerHeight;

    if (textElement) {
      const elementHeight = textElement.offsetHeight;

      const topPosition = (viewportHeight - elementHeight) / 2 + scrollTop;
      textElement.style.top = `${topPosition}px`;
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', adjustTopPosition);
    window.addEventListener('resize', adjustTopPosition);

    adjustTopPosition();
  }, []);

  const onSubmit = async (data: IScheduleDemoForm) => {
    const { errors, formValid } = validateFormDemo(data);
    if (formValid) {
      setError({});
      const text = `from: ${data.firstName + ' ' + data.lastName}<br/>
                    email: ${data.email}<br/>
                    phone: ${data.phone}<br/>
                    job title: ${data.jobTitle}<br/>
                    company: ${data.company}<br/>
                    employees: ${data.employees}`;
      const res = await sendEmail(
        to,
        'Schedule a Demo',
        'Schedule a Demo',
        text,
      );
      if (res.success) {
        // alert(res.message);
        setIsModal(true);
      }

      reset();
    } else {
      setError(errors as any);
    }
    // reset();
  };

  useEffect(() => {
    if (isModal) {
      setTimeout(() => {
        setIsModal(false);
      }, 2000);
    }
  }, [isModal]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={clsx(styles.form, className)}
      {...props}
    >
      <Modal
        active={isModal}
        setActive={setIsModal}
        id={'modal-1'}
        style={{ transition: '0.5s' }}
      >
        <div style={{ color: 'white', fontSize: '40px' }}>Thank you</div>
      </Modal>
      <div className={styles.labelBox}>
        <label className={styles.label}>
          First name <span className={styles.labelAccent}>*</span>
          <Input
            {...register('firstName', {
              required: true,
            })}
            className={styles.input}
            placeholder="Enter your first name"
            error={error.firstName}
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
            error={error.lastName}
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
          error={error.email}
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
                error: error.phone,
              }}
              specialLabel={''}
              countryCodeEditable={false}
              placeholder="Enter phone number"
              containerClass={styles.containerClass}
              inputClass={styles.inputClass}
              buttonClass={styles.buttonClass}
              dropdownClass={styles.dropdownClass}
              inputStyle={{ border: error.phone ? '1px solid red' : 'none' }}
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
          error={error.jobTitle}
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
            error={error.company}
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
            error={error.employees}
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
