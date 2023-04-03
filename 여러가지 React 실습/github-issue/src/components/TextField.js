import styles from './Textfield.module.css';
import cx from 'clsx';
import { forwardRef } from 'react';

const TextField = ({ type = 'input', name, placeholder, onChange, value, error }, ref) => {
  return type === 'input' ? (
    <>
      <input
        onChange={onChange}
        name={name}
        value={value}
        className={cx(styles.input, styles.border, { [styles.error]: Boolean(error) })}
        placeholder={placeholder}
        ref={ref}
      />
    </>
  ) : (
    <textarea
      onChange={onChange}
      name={name}
      value={value}
      ref={ref}
      className={cx(styles.input, styles.textarea, styles.border, { [styles.error]: Boolean(error) })}
      placeholder={placeholder}
    ></textarea>
  );
};

export default forwardRef(TextField);
