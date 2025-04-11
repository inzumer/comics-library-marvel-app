/** Resources */
import { Button, Icon, RichText } from '@components';
import { useMediaQuery } from '@hooks';

/** Styles */
import styles from './styles.module.css';

interface PaginationProps {
  currentPage: number,
  totalPages: number,
  onPageChange: (page: number) => void;
  className?: string;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange, className = '' }) => {
  const isDesktop = useMediaQuery('desktop');

  const limitPages = isDesktop ? 5 : 3;

  const handleClick = (page: number) => {
    window.location.href = '/characters#main';
    onPageChange(page);
  };

  const startPage = Math.max(0, currentPage - Math.floor(limitPages / 2));
  const endPage = Math.min(totalPages, startPage + limitPages);

  return (
    <div className={`${styles.pagination} ${className}`}>
      <Button id='pagination-previous-button' event={() => handleClick(currentPage - 1)} variant='transparent' disabled={currentPage <= 1} className={styles.pagination__item_previous}>
        <Icon name='ArrowLeft' width={20} height={20} />
      </Button>

      {Array.from({ length: endPage - startPage }).map((_, i) => {
        const pageNumber = startPage + i;
        return (
          <Button
            id={`pagination-${pageNumber}-button`}
            key={pageNumber}
            event={() => handleClick(pageNumber)}
            variant='transparent'
            disabled={currentPage === pageNumber}
            className={`${styles.pagination__item_number} ${currentPage === pageNumber ? styles.pagination__item_number__active : ''}`}
          >
            <RichText id={`pagination-${pageNumber}-text`} text={`${pageNumber + 1}`} variant='p3' className={`${styles.pagination__text} ${currentPage === pageNumber ? styles.pagination__item_number__active : ''}`} bold />
          </Button>
        );
      })}

      <Button id='pagination-next-button' event={() => handleClick(currentPage + 1)} variant='transparent' disabled={currentPage <= -1} className={styles.pagination__item_next}>
        <Icon name='ArrowRight' width={20} height={20} />
      </Button>
    </div>
  );
};

Pagination.displayName = 'Pagination';

export default Pagination;
