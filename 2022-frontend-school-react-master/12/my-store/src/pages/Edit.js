import React, { useState, lazy, Suspense } from "react";
import { useQuery, useQueries, useMutation, useQueryClient } from "react-query";
import { getUser, getPosts, updateNickname } from "../mocks/api";

const Post = lazy(() => import("./Post"));

import("./math").then((math) => {
  console.log(math.add(16, 26));
});

// API를 통해 현재 닉네임값 가져오기
// handleSubmit : 업데이트된 inputValue를 서버에 전송해서, 닉네임값 없데이트 하기
export default function Edit() {
  const [inputValue, setInputValue] = useState("");
  const queryClient = useQueryClient();

  // const { data: user } = useQuery("@getUser", getUser, {
  //   staleTime: Infinity,
  //   suspense: true,
  // });

  // const { data: posts } = useQuery("@getPosts", getPosts, {
  //   staleTime: Infinity,
  //   suspense: true,
  // });

  // useQuery 여러개 배열에 객체로 넣어서 한번에
  const results = useQueries([
    {
      queryKey: ["@getUser"],
      queryFn: getUser,
      staleTime: Infinity,
    },
    {
      queryKey: ["@getPosts"],
      queryFn: getPosts,
      staleTime: Infinity,
    },
  ]);

  console.log(results);

  const user = results[0].data;
  const posts = results[1].data;

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

  // if (isLoading) return <span>Loading...</span>;

  // return null;

  // 아직 queries로 는 suspense 처리 오류가 해결되지 않아 일단 옵셔널 체이닝로 하면 오류 해결은 된다.

  return (
    <>
      <h1>Edit</h1>
      <h3>현재 닉네임: {user?.nickName}</h3>
      <form onSubmit={handleSubmit}>
        <label>
          변경할 닉네임:
          <input type="text" value={inputValue} onChange={handleChange} />
        </label>
      </form>
      <ul>
        {posts?.map((post) => (
          <Post title={post.title} />
        ))}
      </ul>
    </>
  );
}
