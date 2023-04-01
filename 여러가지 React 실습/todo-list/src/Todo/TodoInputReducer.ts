export type TodoInputStateType = {
  text: string;
};

// 입력할때는 change, 모두 지우는 clear
export type TodoInputActionType =
  | {
      type: 'change';
      payload: string;
    }
  | {
      type: 'clear';
    };

export const todoInputReducer = (state: TodoInputStateType, action: TodoInputActionType) => {
  switch (action.type) {
    case 'change':
      return {
        text: action.payload,
      };
    case 'clear':
      return {
        text: '',
      };
  }
};
