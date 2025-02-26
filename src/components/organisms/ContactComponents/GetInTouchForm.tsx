'use client';

import React, {
  DetailedHTMLProps,
  HTMLAttributes,
  useEffect,
  useState,
} from 'react';
import styles from '../../../styles/components/organisms/Contact/GetInTouchForm.module.scss';
import clsx from 'clsx';

import { useForm } from 'react-hook-form';
import { Input } from '@/components/atoms/Input';
import { Button } from '@/components/atoms/Button';
import { TextArea } from '@/components/atoms/TextArea';
import { validateFormTouch } from '@/lib/validation';
import { sendEmail } from '@/lib/strapi/strapi-fetch';
import Modal from '@/components/atoms/Modal';
interface GetInTouchFormProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  className: string;
  to: string;
}

interface IScheduleDemoForm {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export default function GetInTouchForm({
  className,
  to,
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
  const [error, setError] = useState<any>({});
  const [isModal, setIsModal] = useState(false);

  function adjustTopPosition() {
    const textElement = document.getElementById('modal-2');
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
    const { errors, formValid } = validateFormTouch(data);

    if (formValid) {
      setError({});

      const text = `from: ${data.firstName + ' ' + data.lastName} <br/>
                    email: ${data.email}<br/>
                    message: ${data.message}`;
      const res = await sendEmail(to, 'Get In Touch', 'Get In Touch', text);

      if (res.success) {
        // alert(res.message);
        setIsModal(true);
      }

      reset();
    } else {
      setError(errors);
    }
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
        id={'modal-2'}
        style={{ transition: '0.5s' }}
      >
        <div style={{ color: 'white', fontSize: '40px' }}>Thank you</div>
      </Modal>
      <div className={styles.nameBox}>
        <label className={styles.label}>
          First name <span className={styles.labelAccent}>*</span>
          <Input
            {...register('firstName', {
              required: { value: true, message: '' },
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
              required: { value: true, message: '' },
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
            required: { value: true, message: '' },
          })}
          placeholder="Enter your business email"
          className={styles.input}
          error={error.email}
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
          error={error.message}
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
