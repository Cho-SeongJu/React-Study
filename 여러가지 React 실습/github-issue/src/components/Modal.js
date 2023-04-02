import { useEffect, useState } from 'react';
import styles from './Modal.module.css';
import cx from 'clsx';

const Modal = ({ opened, title, onClose, placeholder, searchDataList, onClickCell }) => {
  const [searchValue, setSearchValue] = useState('');
  const [filteredData, setFilteredData] = useState(searchDataList);

  useEffect(() => {
    setFilteredData(searchDataList.filter((item) => item === searchValue));
  }, [searchDataList, searchValue]);

  return (
    <div className={cx(styles.modal, { [styles.opened]: opened })}>
      <div className={styles.header}>
        <span>{title}</span>
        <button
          className={styles.closeBtn}
          onClick={onClose}
        >
          X
        </button>
      </div>
      <div className={styles.input}>
        <input
          placeholder={placeholder}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      {filteredData.map((data) => (
        <div
          role="button"
          key={data}
          onClick={onClickCell}
        >
          {data}
        </div>
      ))}
    </div>
  );
};

export default Modal;
