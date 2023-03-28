import React, { useState } from "react";
import { data } from "../data.js";
import SearchBar from "./SearchBar.js";
import StoreTable from "./StoreTable.js";

export default function OnlineStore() {
  const [filter, setFilter] = useState({ text: "", inStockOnly: false });

  function updateFilter(key, value) {
    console.log(key, value);
    setFilter({
      ...filter,
      [key]: value,
    });
  }

  console.log(filter);

  return (
    <>
      <SearchBar filter={filter} updateFilter={updateFilter} />
      <StoreTable products={data} filter={filter} />
    </>
  );
}
