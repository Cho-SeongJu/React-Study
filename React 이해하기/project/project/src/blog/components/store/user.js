import React, { createContext, useState } from "react";
//create Context : context를 생성하게 해주는 함수

export const UserContext = createContext();

export default function UserStore(props) {
  const [job, setJob] = useState("FE-developer");

  const user = {
    name: "hwarari",
    job,
    changeJob: (updatedJob) => setJob(updatedJob),
  };

  // 하위 컴포넌트에게도 제공한다.
  // value에 담긴 데이터만 넘긴다.
  return <UserContext.Provider value={user}>{props.children}</UserContext.Provider>;
}
