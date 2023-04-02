import styles from './Badge.module.css';

const Badge = ({ name, color }) => {
  return (
    <span
      className={styles.badge}
      style={{ background: `#${color}` }}
    >
      {name}
    </span>
  );
};

export default Badge;
