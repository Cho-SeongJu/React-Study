import styles from './Button.module.css';

const Button = ({ style, children }) => {
  return (
    <button
      className={styles.button}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
