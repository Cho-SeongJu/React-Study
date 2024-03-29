import styles from './Pagination.module.css';
import cx from 'clsx';

const Pagination = ({ currentPage, maxPage, onClickPageButton }) => {
  return (
    <div>
      <button
        className={cx(styles.button, styles.blueButton)}
        disabled={currentPage === 1}
      >
        {'< Previous'}
      </button>
      {new Array(maxPage).fill(null).map((_, index) => (
        <PageButton
          key={index}
          number={index + 1}
          onClick={onClickPageButton}
          selected={index + 1 === currentPage}
        />
      ))}
      <button
        className={cx(styles.button, styles.blueButton)}
        disabled={currentPage === maxPage}
      >
        {'Next >'}
      </button>
    </div>
  );
};

const PageButton = ({ number, onClick, selected }) => {
  return (
    <button
      className={cx(styles.button, { [styles.selected]: selected })}
      onClick={() => onClick(number)}
    >
      {number}
    </button>
  );
};

export default Pagination;
