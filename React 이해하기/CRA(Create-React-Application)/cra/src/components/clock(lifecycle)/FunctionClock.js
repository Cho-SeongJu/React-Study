import React, { useState, useEffect } from "react";

export default function FunctionClock() {
  const [date, setDate] = useState(new Date());

  function tick() {
    setDate(new Date());
  }

  useEffect(() => {
    console.log("componentDidMount");
    const timerId = setInterval(tick, 1000);

    return () => {
      console.log("componentWillUnmount");
      clearInterval(timerId);
    };
  }, []);

  useEffect(() => {
    console.log("componentDidUpdate");
    console.log(date);
  }, [date]); // date의 값이 변경이 되면 실행
  // 위에 같이 넣지 않은 이유는 date가 변경될 때 마다 setInterval 함수를 계속 등록하기 때문에 따로 분리

  //setInterval하고 clearInterval은 붙어있어야 읽기 쉽다. 그냥 관련이 있는 코드는 같은 곳에 묶어두는 것이 좋다.
  return (
    <div>
      <h1>Hello, world</h1>
      <h2>It is {date.toLocaleTimeString()}</h2>
    </div>
  );
}
