import styles from './Badge.module.css';
import cx from 'clsx';

const Badge = ({ title, color }) => {
  return <span className={cx(styles.badge, styles[color])}>{title}</span>;
};

export default Badge;
