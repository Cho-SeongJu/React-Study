import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function ReactDocPage() {
  // docID : 1, 2, 3 ...
  const navigate = useNavigate();
  const params = useParams();
  const [docs, setDocs] = useState({});

  useEffect(() => {
    const res = async () => {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.docId}`);
      setDocs(response.data);
    };

    res();
  }, []);

  return (
    <>
      <h5 onClick={() => navigate("/")}>logo</h5>
      <div>ReactDocPage ###{params.docId}</div>
      <p>{docs.title === undefined ? " Loading..." : docs.title}</p>
    </>
  );
}
