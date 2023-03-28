import React from "react";
import { useParams } from "react-router-dom";

export default function ReactDocPage() {
  // docID : 1, 2, 3 ...

  const params = useParams();
  return <div>ReactDocPage ###{params.docId}</div>;
}
