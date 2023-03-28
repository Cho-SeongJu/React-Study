import React from "react";
import { data } from "../data.js";
import SearchBar from "./SearchBar.js";
import StoreTable from "./StoreTable.js";

export default function OnlineStore() {
  return (
    <>
      <SearchBar />
      <StoreTable products={data} />
    </>
  );
}
