import React from "react";

export default function ProductsTable(props) {
  const { category, items, inStockOnly } = props;

  const flteredItems = inStockOnly ? items.filter((item) => item.stocked) : items;

  return (
    <>
      <tr>
        <td style={{ fontWeight: "bold" }}>{category}</td>
      </tr>
      {flteredItems.map((item, idx) => (
        <tr key={idx}>
          <td style={{ color: item.stocked ? "black" : "red" }}>{item.name}</td>
          <td>{item.price}</td>
        </tr>
      ))}
    </>
  );
}
