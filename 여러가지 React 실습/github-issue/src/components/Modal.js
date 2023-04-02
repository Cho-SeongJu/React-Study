import { useEffect, useState } from 'react';
import styles from './Modal.module.css';
import cx from 'clsx';

const Modal = ({ opened, title, onClose, placeholder, searchDataList, onClickCell }) => {
  const [searchValue, setSearchValue] = useState('');
  const [filteredData, setFilteredData] = useState(searchDataList);

  useEffect(() => {
    setFilteredData(searchDataList);
  }, [searchDataList]);

  useEffect(() => {
    if (searchValue !== '') {
      const filteredSearchList = searchDataList.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()));
      setFilteredData(filteredSearchList);
    } else if (searchValue === '') {
      setFilteredData(searchDataList);
    }
  }, [searchDataList, searchValue]);

  return (
    <div className={cx(styles.modal, { [styles.opened]: opened })}>
      <div className={styles.header}>
        <span>Filter By {title}</span>
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
      <div className={styles.list}>
        {filteredData.map((data) => (
          <div
            role="button"
            key={data.name}
            onClick={() => {
              const isLabel = title.toLowerCase() === 'label';
              const paramKey = isLabel ? 'labels' : title.toLowerCase();
              // 변수를 키로 넣을려면 [] 이렇게 넣으면 된다.
              onClickCell({ [paramKey]: data.name });
            }}
            className={styles.item}
          >
            {data.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Modal;
