import { useState, useReducer } from 'react';
import './App.css';
import Divider from './Divider/Divider';
import TodoHeader from './Header/TodoHeader';
import TodoInput from './Input/TodoInput';
import TodoList from './List/TodoList';
import TodoListTools from './Tools/TodoListTools';
import TodoListArea from './List/TodoListArea';
import { todoInputReducer } from './Todo/TodoInputReducer';
import { todoReducer } from './Todo/todoReducer';

// export type TodoType = {
//   id: number;
//   text: string;
//   isChecked: boolean;
// };

function App() {
  // const [text, setText] = useState('');
  const [inputState, inputDispatch] = useReducer(todoInputReducer, { text: '' });
  const [todoState, todoDispatch] = useReducer(todoReducer, { todos: [] });
  // const [todos, setTodos] = useState<TodoType[]>([]);

  const handleTextChange = (text: string) => {
    inputDispatch({
      type: 'change',
      payload: text,
    });
    // setText(text);
  };

  const handleSubmit = () => {
    // if (!text) {
    //   return;
    // }

    if (!inputState.text) {
      return;
    }

    // const newTodos = todos.concat({
    //   id: Date.now(),
    //   // text: text,
    //   text: inputState.text,
    //   isChecked: false,
    // });

    // setTodos(newTodos);
    // setText('');

    todoDispatch({
      type: 'add',
      payload: {
        text: inputState.text,
      },
    });

    inputDispatch({
      type: 'clear',
    });
  };

  const handleRemove = (id: number) => {
    // const newTodos = todos.filter((todo) => {
    //   return todo.id !== id;
    // });
    // setTodos(newTodos);
    todoDispatch({
      type: 'remove',
      payload: {
        id: id,
      },
    });
  };

  const handleToggle = (id: number) => {
    // const newTodos = todos.map((todo) => {
    //   if (todo.id === id) {
    //     return {
    //       ...todo,
    //       isChecked: !todo.isChecked,
    //     };
    //   }
    //   return todo;
    // });
    // setTodos(newTodos);
    todoDispatch({
      type: 'checked',
      payload: {
        id: id,
      },
    });
  };

  const isTodoAllChecked = () => {
    return todoState.todos.every((todo) => todo.isChecked);
  };

  const handleToggleAllClick = () => {
    const isAllChecked = isTodoAllChecked();
    // const newTodos = todos.map((todo) => {
    //   return {
    //     ...todo,
    //     isChecked: !isAllChecked,
    //   };
    // });
    // setTodos(newTodos);
    todoDispatch({
      type: 'allChecked',
      payload: isAllChecked,
    });
  };

  const handleRemoveAllClick = () => {
    // setTodos([]);
    todoDispatch({
      type: 'allRemove',
    });
  };

  return (
    <main className="App">
      <TodoHeader count={todoState.todos.filter((todo) => !todo.isChecked).length} />
      <TodoInput
        // text={text}
        text={inputState.text}
        onTextChange={handleTextChange}
        onSubmit={handleSubmit}
      />
      <TodoListArea todoCount={todoState.todos.length}>
        <TodoListTools
          isAllChecked={isTodoAllChecked()}
          onToggleAllClick={handleToggleAllClick}
          onRemoveAllClick={handleRemoveAllClick}
        />
        <Divider />
      </TodoListArea>
      <TodoList
        todos={todoState.todos}
        onRemoveClick={handleRemove}
        onToggleClick={handleToggle}
      />
    </main>
  );
}

export default App;
