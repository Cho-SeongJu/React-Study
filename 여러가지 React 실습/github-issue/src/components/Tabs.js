import { useState } from 'react';
import styles from './Tabs.module.css';
import cx from 'clsx';

const tabList = ['Code', 'Issues', 'Pull Request'];

const Tabs = () => {
  const [selectedTabIdx, setSelectedTabIdx] = useState(0);

  return (
    <ul className={styles.tabList}>
      {tabList.map((tab, index) => (
        <Tab
          key={`${tab}_${index}`}
          title={tab}
          selected={selectedTabIdx === index}
          onClick={() => setSelectedTabIdx(index)}
        />
      ))}
    </ul>
  );
};

const Tab = ({ title, selected, onClick, number }) => {
  return (
    <li>
      <button
        onClick={onClick}
        className={cx(styles.tab, { [styles.selected]: selected })}
      >
        <span>{title}</span>
        {number && <div className={styles.circle}>{number}</div>}
      </button>
    </li>
  );
};

export default Tabs;
