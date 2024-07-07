'use client';

import React, { useState } from 'react';
import styles from '../../../styles/components/organisms/Individuals/Chart.module.scss';

import { Section } from '@/components/atoms/Section';
import { Input } from '@/components/atoms/Input';
import { Button } from '@/components/atoms/Button';
import { Divider } from '@/components/atoms/Divider';
import { useForm } from 'react-hook-form';
interface IDividualData {
  attributes?: {
    blocks: {
      title: string;
      descritpionOne: string;
      descritpionTwo: string;
      organizationTitle: string;
      organizationContent: string;
    }[];
  };
}
interface ChartProps {
  data?: [IDividualData] | undefined;
}

interface IFormData {
  amount: string;
}

export default function Chart({ data }: ChartProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<IFormData>();

  const onSubmit = (data: IFormData) => {
    reset();
  };

  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  if (!data) {
    return null;
  }

  const { attributes } = data[0];

  if (!attributes) {
    return null;
  }

  const { blocks = [] } = attributes;

  return (
    <Section type="ghost" className={styles.section}>
      <div className={styles.topBlock}>
        <h3 className={styles.title}>
          The INFIN <br /> gets you seen
        </h3>
        <p className={styles.description}>
          {blocks[3].descritpionOne}
          <br />
          <br />
          {blocks[3].descritpionTwo}
        </p>
      </div>

      <div className={styles.bottomBlock}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.container}>
            <h4 className={styles.formTitle}>{blocks[3].organizationTitle}</h4>
            <p className={styles.smallText}>{blocks[3].organizationContent}</p>

            <Divider className={styles.hr} />

            <label className={styles.label}>
              Enter a dollar amount below
              <Input
                type="text"
                {...register('amount', {
                  pattern: /^(0|[1-9]\d*)(\.\d+)?$/,
                  required: { value: true, message: 'Enter only numbers' },
                })}
                className={styles.input}
                placeholder="Enter the amount"
                error={errors.amount}
              />
            </label>
          </div>

          <Button
            type="submit"
            appearance="ghost"
            className={styles.buttonSubmit}
            disabled={!isValid}
          >
            Save on your device
          </Button>
        </form>

        <div className={styles.chart}>
          <div className={styles.chartContainer}>
            <div className={styles.chartBar}></div>
          </div>
        </div>
      </div>
    </Section>
  );
}
