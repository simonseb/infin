import React, { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';
import styles from '../../styles/components/molecules/ReviewList.module.scss';
import clsx from 'clsx';

import { IReview } from '@/lib/types';

import ReviewItem from './ReviewItem';
import ArrowIcon from '../../../public/icons/arrow.svg';

interface ReviewListProps
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  reviews: IReview[];
}

export default function ReviewList({
  reviews,
  className,
  ...props
}: ReviewListProps) {
  return (
    <div className={clsx(styles.reviews, className)} {...props}>
      <ul className={styles.list}>
        {reviews.map((review) => (
          <ReviewItem key={review.name} {...review} />
        ))}
      </ul>

      <div className={styles.pagination}>
        <button aria-label="button preview" className={styles.buttonLeft}>
          <ArrowIcon />
        </button>

        <div>
          01 <span className={styles.span}>/ 03</span>
        </div>

        <button aria-label="button next" className={styles.buttonRight}>
          <ArrowIcon />
        </button>
      </div>
    </div>
  );
}
