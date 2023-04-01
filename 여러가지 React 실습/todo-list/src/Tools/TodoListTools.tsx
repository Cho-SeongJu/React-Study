import styles from './TodoListTools.module.css';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import { CgRadioCheck } from 'react-icons/cg';
import { useTodoDispatch, useTodoState } from '../Todo/TodoProvider';

const TodoListTools = () => {
  const todoState = useTodoState();
  const todoDispatch = useTodoDispatch();

  const isTodoAllChecked = () => {
    return todoState.todos.every((todo) => todo.isChecked);
  };

  const handleToggleAllClick = () => {
    todoDispatch({
      type: 'allChecked',
      payload: isTodoAllChecked(),
    });
  };

  const handleRemoveAllClick = () => {
    todoDispatch({
      type: 'allRemove',
    });
  };

  return (
    <section className={styles.container}>
      <button
        className={styles.button}
        onClick={handleToggleAllClick}
      >
        {isTodoAllChecked() ? (
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
