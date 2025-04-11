/** Resources */
import { Button, RichText } from '@components';

/** Styles */
import styles from './styles.module.css';

interface PaginationButtonsProps {
  pageNumber: number,
  currentPage: number,
  onPageChange: (page: number) => void;
}

const PaginationButtons: React.FC<PaginationButtonsProps> = ({
  pageNumber,
  currentPage,
  onPageChange,
}) => {
  const isActive = currentPage === pageNumber;
  const buttonClasses = `${styles.pagination__item_number} ${
    isActive ? styles.pagination__item_number__active : ''
  }`;

  return (
    <Button
      id={`pagination-${pageNumber}-button`}
      key={pageNumber}
      event={() => onPageChange(pageNumber)}
      variant="transparent"
      disabled={isActive}
      className={buttonClasses}
    >
      <RichText
        id={`pagination-${pageNumber}-text`}
        text={`${pageNumber + 1}`}
        variant="p3"
        bold
      />
    </Button>
  );
};

PaginationButtons.displayName = 'PaginationButtons';

export default PaginationButtons;
