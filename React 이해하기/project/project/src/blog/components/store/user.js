import React, { createContext, useState, useReducer } from "react";
//create Context : context를 생성하게 해주는 함수

export const UserContext = createContext();

const initialUser = {
  name: "hwarari",
  job: "FE-developer",
  // changeJob: (updatedJob) => setJob(updatedJob),
};

const userReducer = (state, action) => {
  switch (action.type) {
    case "changeJob":
      //state의 job에 해당하는 데이터를 action.text
      return { ...state, job: action.text };
      break;
  }
};

export default function UserStore(props) {
  // const [job, setJob] = useState("FE-developer");
  const [user, dispatch] = useReducer(userReducer, initialUser);
  console.log(user);
  // const user = {
  //   name: "hwarari",
  //   job,
  //   changeJob: (updatedJob) => setJob(updatedJob),
  // };

  // 하위 컴포넌트에게도 제공한다.
  // value에 담긴 데이터만 넘긴다.
  return <UserContext.Provider value={dispatch}>{props.children}</UserContext.Provider>;
}
