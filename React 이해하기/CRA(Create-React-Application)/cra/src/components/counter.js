import React, { useState } from "react";
// Hook 함수

export default function counter() {
  // 값, 값을 변경할 때 쓰는 함수
  // 원시 타입 state 다루기
  //   const [count, setCount] = useState(0);
  //   const [show, setShow] = useState(true);
  // +, -, *
  const operators = ["+", "-", "*"];
  //   const [operator, setOperator] = useState(operators[0]);

  // 참조차입 state 다루기
  const [info, setInfo] = useState({
    count: 0,
    show: true,
    operator: operators[0],
  });

  return (
    <div>
      <button
        onClick={() => {
          let result;
          if (info.operator === "+") result = info.count + 1;
          else if (info.operator === "-") result = info.count - 1;
          else if (info.operator === "*") result = info.count * 1;
          setInfo({ ...info, count: result });
        }}
      >
        {info.operator}1
      </button>
      <button
        onClick={() => {
          setInfo({ ...info, show: !info.show });
        }}
      >
        Show and Hide
      </button>
      <button
        onClick={() => {
          const idx = Math.floor(Math.random() * operators.length);
          //   setOperator(operators[idx]);
          setInfo({ ...info, operator: operators[idx] });
        }}
      >
        Change Operator
      </button>
      <br />
      {info.show && `Counter: ${info.count}`}
    </div>
  );
}
