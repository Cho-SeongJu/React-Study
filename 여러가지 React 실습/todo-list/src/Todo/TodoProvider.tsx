import { Dispatch, ReactNode, createContext, useContext, useReducer } from 'react';
import { TodoActionType, TodoStateType, todoReducer } from './todoReducer';
import { TodoInputActionType, TodoInputStateType, todoInputReducer } from './TodoInputReducer';

interface TodoProviderProps {
  children: ReactNode;
}

const TodoStateContext = createContext<TodoStateType | null>(null);
const TodoDispatchContext = createContext<Dispatch<TodoActionType> | null>(null);
const InputTodoContext = createContext<TodoInputStateType | null>(null);
const InputTodoDispatchContext = createContext<Dispatch<TodoInputActionType> | null>(null);

export const TodoProvider = (props: TodoProviderProps) => {
  const [inputState, inputDispatch] = useReducer(todoInputReducer, { text: '' });
  const [todoState, todoDispatch] = useReducer(todoReducer, { todos: [] });

  // context는 안에있는 value값이 바뀌면 하위가 랜더링을 다시 하게 된다. state가 바뀌었을때 dispatch는 바뀌지 않기때문에 별개로 나누어준다.
  return (
    <TodoStateContext.Provider value={todoState}>
      <TodoDispatchContext.Provider value={todoDispatch}>
        <InputTodoContext.Provider value={inputState}>
          <InputTodoDispatchContext.Provider value={inputDispatch}>{props.children}</InputTodoDispatchContext.Provider>
        </InputTodoContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};

// use로 붙으면 거의 HOOK
export const useTodoState = () => {
  const value = useContext(TodoStateContext);

  if (!value) {
    throw new Error('cannot find TodoState');
  }

  return value;
};

export const useTodoDispatch = () => {
  const value = useContext(TodoDispatchContext);

  if (!value) {
    throw new Error('cannot find TodoDispatch');
  }

  return value;
};

export const useInputTodoState = () => {
  const value = useContext(InputTodoContext);

  if (!value) {
    throw new Error('cannot find InputTodoState');
  }

  return value;
};

export const useInputTodoDispatch = () => {
  const value = useContext(InputTodoDispatchContext);

  if (!value) {
    throw new Error('cannot find InputTodoDispatch');
  }

  return value;
};
