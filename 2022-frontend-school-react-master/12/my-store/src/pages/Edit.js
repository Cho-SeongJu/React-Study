import React, { useState } from "react";

// API를 통해 현재 닉네임값 가져오기
// handleSubmit : 업데이트된 inputValue를 서버에 전송해서, 닉네임값 없데이트 하기
export default function Edit() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h1>Edit</h1>
      <h3>현재 닉네임: {"hwarari"}</h3>
      <form onSubmit={handleSubmit}>
        <label>
          변경할 닉네임:
          <input type="text" value={inputValue} onChange={handleChange} />
        </label>
      </form>
    </>
  );
}
