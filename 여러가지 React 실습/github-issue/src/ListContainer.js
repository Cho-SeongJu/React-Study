import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import styles from './ListContainer.module.css';
import Button from './components/Button';
import ListItem from './components/ListItem';
import ListItemLayout from './components/ListItemLayout';
import cx from 'clsx';
import Modal from './components/Modal';
import Pagination from './components/Pagination';
import axios from 'axios';

const GITHUB_API = 'https://api.github.com';

const ListContainer = () => {
  const [inputValue, setInputValue] = useState('is:pr is:open');
  const [list, setList] = useState([]);
  // const [page, setPage] = useState(1);
  // const [isOpenMode, setIsOpenMode] = useState(true);
  // const [params, setParams] = useState();

  const [searchParams, setSearchParams] = useSearchParams(1);

  const page = parseInt(searchParams.get('page'), 10);
  const state = searchParams.get('state');

  console.log(page);
  console.log(state);

  //key=value&key=value
  async function getData(params) {
    const data = await axios.get(`${GITHUB_API}/repos/facebook/react/issues`, {
      params: params,
    });
    setList(data.data);
  }

  useEffect(() => {
    getData(searchParams);
  }, [searchParams]);

  return (
    <>
      <div className={styles.listContainer}>
        <div className={styles.topSection}>
          <input
            className={styles.input}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Link
            to="/new"
            className={styles.link}
          >
            <Button style={{ fontSize: '14px', backgroundColor: 'green', color: 'white', cursor: 'pointer' }}>New Issue</Button>
          </Link>
        </div>
        <OpenClosedFilters
          isOpenMode={state !== 'closed'}
          onClickMode={(mode) => setSearchParams({ mode })}
        />
        <ListItemLayout className={styles.listFilter}>
          <ListFilter
            onChangeFilter={(params) => {
              // 필터링된 요소에 맞게 데이터를 불러오기
              // const data = getData("필터링된 정보")
              setSearchParams(params);
            }}
          />
        </ListItemLayout>
        <div className={styles.container}>
          {list.map((listitem, index) => (
            <ListItem
              key={index}
              data={listitem}
            />
          ))}
        </div>
      </div>
      <div className={styles.paginationContainer}>
        <Pagination
          maxPage={10}
          currentPage={isNaN(page) ? 1 : page}
          onClickPageButton={(number) => setSearchParams({ page: number })}
        />
      </div>
    </>
  );
};

const ListFilter = ({ onChangeFilter }) => {
  const [showModal, setShowModal] = useState('');
  const [list, setList] = useState([]);
  // const filterList = ['Author', 'Label', 'Projects', 'Miledstones', 'Assignee', 'Sort'];
  const filterList = ['Label', 'Miledstone', 'Assignee'];

  async function getData(apiPath) {
    const data = await axios.get(`${GITHUB_API}/repos/facebook/react/${apiPath}`);

    let result = [];
    switch (apiPath) {
      case 'assignees':
        result = data.data.map((d) => ({
          name: d.login,
        }));
        break;

      case 'miledstones':
        result = data.data.map((d) => ({
          name: d.title,
        }));
        break;

      case 'lables':
      default:
        result = data.data;
    }
    console.log(result);
    // 데이터 가공 name, title, login -> name
    setList(result);
  }

  useEffect(() => {
    if (showModal) {
      const apiPath = `${showModal.toLowerCase()}s`;
      getData(apiPath);
    }
  }, [showModal]);

  return (
    <>
      <div className={styles.filterList}>
        {filterList.map((filter) => (
          <ListFilterItem
            searchDataList={list}
            key={filter}
            onClick={() => setShowModal(filter)}
            onClose={() => setShowModal()}
            showModal={showModal === filter}
            onChangeFilter={onChangeFilter}
          >
            {filter}
          </ListFilterItem>
        ))}
      </div>
    </>
  );
};

const ListFilterItem = ({ children, onClick, onClose, showModal, onChangeFilter, searchDataList }) => {
  const [list, setList] = useState(searchDataList);

  useEffect(() => {
    setList(searchDataList);
  }, [searchDataList]);

  return (
    <div className={styles.filterItem}>
      <span
        role="button"
        onClick={onClick}
      >
        {children} ▾
      </span>
      <div className={styles.modalContainer}>
        <Modal
          title={children}
          opened={showModal}
          onClose={onClose}
          placeholder="Filter Labels"
          searchDataList={list}
          onClickCell={(params) => {
            onChangeFilter(params);
          }}
        />
      </div>
    </div>
  );
};

const OpenClosedFilters = ({ isOpenMode, onClickMode }) => {
  // const data = getData();
  // const opendData = data.filter((d) => d.state === 'open')
  // const closedData = data.filter((d) => d.state === 'closed')
  // const openModeDataSize = 1;
  // const closeModeDataSize = 2;

  return (
    <>
      <OpenClosedFilter
        // size={openModeDataSize}
        state="Open"
        selected={isOpenMode}
        onClick={() => onClickMode('open')}
      />
      <OpenClosedFilter
        // size={closeModeDataSize}
        state="Closed"
        selected={!isOpenMode}
        onClick={() => onClickMode('closed')}
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
