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
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [animationDirection, setAnimationDirection] = useState<string>('next');
  const reviewsPerPage = 2;
  const totalPage = Math.ceil(reviews.length / reviewsPerPage);

  const goToPage = (page: number, direction: string) => {
    if (page < 1 || page > totalPage || isAnimating)
      return;
    setIsAnimating(true);
    setAnimationDirection(direction);
    setTimeout(() => {
      setCurrentPage(page);
      setIsAnimating(false);
    }, 500); // Duration of the slide animation
  }

  const formatNumber = (num: number) => {
    return num.toString().padStart(2, '0');
  }

  const startIndex = (currentPage - 1) * reviewsPerPage;
  const currentReviews = reviews.slice(startIndex, startIndex + reviewsPerPage);

  return (
    <div className={clsx(styles.reviews, className)} {...props}>
      <ul className={clsx(styles.list, {
        [styles.animatingNext]: isAnimating && animationDirection === 'next',
        [styles.animatingPrev]: isAnimating && animationDirection === 'prev'
      })}>
        {currentReviews.map((review) => (
          <ReviewItem key={review.name} {...review} />
        ))}
      </ul>

      <div className={styles.pagination}>
        <button aria-label="button previous" className={styles.buttonLeft} onClick={() => goToPage(currentPage - 1, 'prev')}>
          <ArrowIcon />
        </button>

        <div>
          {formatNumber(currentPage)} <span className={styles.span}>/ {formatNumber(totalPage)}</span>
        </div>

        <button aria-label="button next" className={styles.buttonRight} onClick={() => goToPage(currentPage + 1, 'next')}>
          <ArrowIcon />
        </button>
      </div>
    </div>
  );
}
