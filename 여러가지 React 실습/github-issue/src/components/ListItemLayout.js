import cs from 'clsx';
import styles from './ListItemLayout.module.css';

const ListItemLayout = ({ children, className }) => {
  return (
    <div className={cs(styles.wrapper, className)}>
      <input
        type="checkbox"
        className={styles.checkbox}
        // value={checked}
        // onChange={onChangeCheckBox}
      />
      {children}
    </div>
  );
};

export default ListItemLayout;
