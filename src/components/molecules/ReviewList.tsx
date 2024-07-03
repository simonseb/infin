import React, { DetailedHTMLProps, HtmlHTMLAttributes, useState } from 'react';
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

  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPage = 3;

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPage)
      return;
    setCurrentPage(page);
  }
  const formatNumber = (num: number) => {
    return num.toString().padStart(2, '0');
  }

  return (
    <div className={clsx(styles.reviews, className)} {...props}>
      <ul className={styles.list}>
        {reviews.map((review) => (
          <ReviewItem key={review.name} {...review} />
        ))}
      </ul>

      <div className={styles.pagination}>
        <button aria-label="button preview" className={styles.buttonLeft} onClick={() => goToPage(currentPage - 1)}>
          <ArrowIcon />
        </button>

        <div>
          {formatNumber(currentPage)} <span className={styles.span}>/ {formatNumber(totalPage)}</span>
        </div>

        <button aria-label="button next" className={styles.buttonRight} onClick={() => goToPage(currentPage + 1)}>
          <ArrowIcon />
        </button>
      </div>
    </div>
  );
}
