import React from 'react';
import styles from '@/styles/components/organisms/Blog/BottomPagination.module.scss';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className={styles.pagination}>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={styles.navButton}
      >
        &larr;
      </button>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`${styles.pageButton} ${currentPage === page ? styles.active : ''}`}
        >
          {page}
        </button>
      ))}
      {totalPages > 5 && currentPage < totalPages - 2 && (
        <>
          <span className={styles.dots}>...</span>
          <button
            onClick={() => onPageChange(totalPages)}
            className={`${styles.pageButton} ${currentPage === totalPages ? styles.active : ''}`}
          >
            {totalPages}
          </button>
        </>
      )}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={styles.navButton}
      >
        &rarr;
      </button>
    </div>
  );
};

export default Pagination;
