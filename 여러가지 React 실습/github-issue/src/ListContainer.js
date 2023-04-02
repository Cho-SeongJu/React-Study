import { useEffect, useState } from 'react';
import styles from './ListContainer.module.css';
import Button from './components/Button';
import ListItem from './components/ListItem';
import ListItemLayout from './components/ListItemLayout';
import cx from 'clsx';

const ListContainer = () => {
  const [inputValue, setInputValue] = useState('is:pr is:open');

  useEffect(() => {
    console.log({ inputValue });
  }, [inputValue]);

  return (
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
        <div className={styles.filterList}>
          <span>Author</span>
          <span>Label</span>
          <span>Projects</span>
          <span>Milestones</span>
          <span>Assignee</span>
          <span>Sort</span>
        </div>
      </ListItemLayout>
      <div className={styles.container}>
        <ListItem
          badges={[
            {
              color: 'red',
              title: 'Bug2',
            },
          ]}
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
