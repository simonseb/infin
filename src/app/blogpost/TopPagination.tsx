import React from 'react';
import styles from '@/styles/components/organisms/Blog/TopPagination.module.scss';

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
    return (
        <div className={styles.pagination}>
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={styles.navButton}
            >
                &larr;
            </button>
            <div
                onClick={() => onPageChange(currentPage)}
                className={`${styles.pageButton} ${currentPage === currentPage ? styles.active : ''}`}
            >
                {currentPage} / {totalPages}
            </div>

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
