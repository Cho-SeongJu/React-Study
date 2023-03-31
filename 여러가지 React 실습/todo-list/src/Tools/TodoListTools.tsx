import styles from './TodoListTools.module.css';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import { CgRadioCheck } from 'react-icons/cg';

interface TodoListToolsProps {
  onToggleAllClick: () => void;
  onRemoveAllClick: () => void;
  isAllChecked: boolean;
}

const TodoListTools = (props: TodoListToolsProps) => {
  const handleToggleAllClick = () => {
    props.onToggleAllClick();
  };

  const handleRemoveAllClick = () => {
    props.onRemoveAllClick();
  };
  console.log(props.isAllChecked);
  return (
    <section className={styles.container}>
      <button
        className={styles.button}
        onClick={handleToggleAllClick}
      >
        {props.isAllChecked ? (
          <>
            <CgRadioCheck className={styles.checkAll} />
            전체완료
          </>
        ) : (
          <>
            <AiOutlineCheckCircle className={styles.checkAll} />
            전체해제
          </>
        )}
      </button>
      <button
        className={[styles.button, styles.removeAllButton].join(' ')}
        onClick={handleRemoveAllClick}
      >
        <MdDelete className={styles.removeAll} />
        전체삭제
      </button>
    </section>
  );
};

export default TodoListTools;
