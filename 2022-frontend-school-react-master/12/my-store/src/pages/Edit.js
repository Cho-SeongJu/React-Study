import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { getUser, updateNickname } from "../mocks/api";

// API를 통해 현재 닉네임값 가져오기
// handleSubmit : 업데이트된 inputValue를 서버에 전송해서, 닉네임값 없데이트 하기
export default function Edit() {
  const [inputValue, setInputValue] = useState("");
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery("@getUser", getUser);
  // mutation에 함수를 넣어주고
  const mutation = useMutation(updateNickname, {
    onSuccess: () => {
      queryClient.invalidateQueries("@getUser");
    },
  });

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // mutate에 업데이트 할 값을 넣는다.
    mutation.mutate(inputValue);
  };

  if (isLoading) return <span>Loading...</span>;

  return (
    <>
      <h1>Edit</h1>
      <h3>현재 닉네임: {data.nickName}</h3>
      <form onSubmit={handleSubmit}>
        <label>
          변경할 닉네임:
          <input type="text" value={inputValue} onChange={handleChange} />
        </label>
      </form>
    </>
  );
}
