import { useEffect, useState } from 'react';
import styles from './ListContainer.module.css';
import Button from './components/Button';
import ListItem from './components/ListItem';
import ListItemLayout from './components/ListItemLayout';
import cx from 'clsx';
import Modal from './components/Modal';
import Pagination from './components/Pagination';

const ListContainer = () => {
  const [inputValue, setInputValue] = useState('is:pr is:open');
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    console.log({ inputValue });
  }, [inputValue]);

  return (
    <>
      <div className={styles.listContainer}>
        <div className={styles.topSection}>
          <input
            className={styles.input}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button style={{ fontSize: '14px', backgroundColor: 'green', color: 'white' }}>New Issue</Button>
        </div>
        <OpenClosedFilters />
        <ListItemLayout className={styles.listFilter}>
          <ListFilter
            onChangeFilter={(filteredData) => {
              // 필터링된 요소에 맞게 데이터를 불러오기
              // const data = getData("필터링된 정보")
            }}
          />
        </ListItemLayout>
        <div className={styles.container}>
          {list.map((listitem, index) => (
            <ListItem
              key={index}
              badges={[
                {
                  color: 'red',
                  title: 'Bug2',
                },
              ]}
            />
          ))}
        </div>
      </div>
      <div className={styles.paginationContainer}>
        <Pagination
          maxPage={10}
          currentPage={page}
          onClickPageButton={(number) => setPage(number)}
        />
      </div>
    </>
  );
};

const ListFilter = ({ onChangeFilter }) => {
  return (
    <>
      <div className={styles.filterList}>
        <ListFilterItem>Author</ListFilterItem>
        <ListFilterItem>Label</ListFilterItem>
        <ListFilterItem>Projects</ListFilterItem>
        <ListFilterItem>Milestones</ListFilterItem>
        <ListFilterItem>Assignee</ListFilterItem>
        <ListFilterItem>Sort</ListFilterItem>
      </div>
    </>
  );
};

const ListFilterItem = ({ children, onChangeFilter }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.filterItem}>
      <span
        role="button"
        onClick={() => setShowModal(true)}
      >
        {children} ▾
      </span>
      <div className={styles.modalContainer}>
        <Modal
          opened={showModal}
          onClose={() => setShowModal(false)}
          placeholder="Filter Labels"
          searchDataList={['bug', 'Labels', 'Apple']}
          onClickCell={() => {
            onChangeFilter();
          }}
        />
      </div>
    </div>
  );
};

const OpenClosedFilters = ({ data }) => {
  const [isOpenMode, setIsOpenMode] = useState(true);
  // const data = getData();
  // const opendData = data.filter((d) => d.state === 'open')
  // const closedData = data.filter((d) => d.state === 'closed')
  const openModeDataSize = 1;
  const closeModeDataSize = 2;

  return (
    <>
      <OpenClosedFilter
        size={openModeDataSize}
        state="Open"
        selected={isOpenMode}
        onClick={() => setIsOpenMode(true)}
      />
      <OpenClosedFilter
        size={closeModeDataSize}
        state="Closed"
        selected={!isOpenMode}
        onClick={() => setIsOpenMode(false)}
      />
    </>
  );
};

const OpenClosedFilter = ({ size, state, onClick, selected }) => {
  return (
    <span
      role="button"
      className={cx(styles.textFilter, { [styles.selected]: selected })}
      onClick={onClick}
    >
      {size} {state}
    </span>
  );
};

export default ListContainer;
