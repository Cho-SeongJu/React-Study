import styles from './Tabs.module.css';
import cx from 'clsx';
import { useLocation, Link } from 'react-router-dom';

const tabList = [
  { name: 'Code', pathname: '/code' },
  { name: 'Issues', pathname: '/issue' },
  { name: 'Pull Request', pathname: 'pulls' },
  { name: 'Actions', pathname: '/actions' },
  { name: 'Projects', pathname: '/projects' },
  { name: 'Security', pathname: '/security' },
];

const Tabs = () => {
  const location = useLocation();
  return (
    <ul className={styles.tabList}>
      {tabList.map((tab, index) => (
        <Tab
          key={index}
          item={tab}
          selected={(location.pathname === '/' ? '/issue' : location.pathname) === tab.pathname}
        />
      ))}
    </ul>
  );
};

const Tab = ({ title, selected, onClick, number, item }) => {
  return (
    <li>
      <Link
        to={item.pathname}
        className={styles.link}
      >
        <button
          onClick={onClick}
          className={cx(styles.tab, { [styles.selected]: selected })}
        >
          <span>{item.name}</span>
          {number && <div className={styles.circle}>{number}</div>}
        </button>
      </Link>
    </li>
  );
};

export default Tabs;
