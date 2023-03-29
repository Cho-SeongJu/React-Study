import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { getUser } from "../mocks/api";
export default function Home() {
  const navigate = useNavigate();

  // statleTime을 Infinity로 하면 cache 되어있는 데이터를 사용한다.
  const { data, isLoading } = useQuery("@getUser", getUser, {
    staleTime: Infinity,
  });
  return (
    <div>
      <h1>Hello, {data?.nickName}</h1>
      <button onClick={() => navigate("/edit")}>Go Edit Page</button>
    </div>
  );
}
