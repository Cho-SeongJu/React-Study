import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import axios from "axios";
import useSWR from "swr";

export default function ReactPage() {
  // api call ->  react에 해당하는 글의 목록을 응답 받음.
  // const [docs, setDocs] = useState([]);
  const [number, setNumber] = useState(0);

  const fetcher = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    // const result = await res.json();
    // setDocs(result);
    return res.data;
    // result 를 return 해야할 때는 then 사용하면 된다.
  };

  const { data: docs, error } = useSWR("posts", fetcher);

  // const docs = [
  //   {
  //     id: 1,
  //     title: "React 공부를 시작하면서",
  //     date: "29/03/2023",
  //   },
  //   {
  //     id: 2,
  //     title: "CRA 없이 리액트 프로젝트 시작하기",
  //     date: "29/03/2023",
  //   },
  //   {
  //     id: 3,
  //     title: "이제는 사용해보자 useMemo & useCallback",
  //     date: "29/03/2023",
  //   },
  //   {
  //     id: 4,
  //     title: "React 프로젝트에 Prettier 적용하기",
  //     date: "29/03/2023",
  //   },
  //   {
  //     id: 5,
  //     title: "React의 setState() 제대로 사용하기",
  //     date: "29/03/2023",
  //   },
  // ];

  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  //     // const result = await res.json();
  //     // setDocs(result);
  //     return res.data;
  //     // result 를 return 해야할 때는 then 사용하면 된다.
  //   }

  //   fetchData().then((res) => {
  //     setDocs(res);
  //   });
  // }, []);
  if (error) return <div>Failed to Load</div>;
  if (!docs) return <div>loading...</div>;

  return (
    <div>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      {docs.map((doc) => (
        <Link to={`${doc.id}`} key={doc.id} style={{ display: "block", margin: "1rem 0" }}>
          {doc.title}
        </Link>
      ))}
    </div>
  );
}
