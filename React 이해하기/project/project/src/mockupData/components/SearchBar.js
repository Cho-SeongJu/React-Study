import React from "react";

export default function SearchBar(props) {
  const { text, inStockOnly } = props.filter;

  function handleText(e) {
    //setFilter
    props.updateFilter(e.target.name, e.target.value);
  }
  function handleInStockOnly(e) {
    props.updateFilter(e.target.name, e.target.checked);
  }

  return (
    <>
      <input placeholder="Search..." name="text" value={text} onChange={handleText} />
      <div>
        <input type="checkbox" id="stock" name="inStockOnly" checked={inStockOnly} onChange={handleInStockOnly} />
        <label htmlFor="stock">Only show products in stock</label>
      </div>
    </>
  );
}
