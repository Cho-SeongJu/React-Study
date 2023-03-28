import React from "react";
import ProductsTable from "./ProductsTable";

export default function StoreTable(props) {
  const { products } = props;

  const result = products.reduce((acc, cur) => {
    if (acc.hasOwnProperty(cur.category)) {
      // 키를 가지고 있는 케이스
      return {
        ...acc,
        [cur.category]: [...acc[cur.category], cur],
      };
    } else {
      // 새로운 카테고리의 key를 생성하고 배열도 추가 해줘야 함
      return {
        ...acc,
        [cur.category]: [cur],
      };
    }
  }, {});

  const keys = Object.keys(result);
  return (
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Price</td>
        </tr>
      </thead>
      <tbody>
        {keys.map((key, idx) => (
          <ProductsTable category={key} items={result[key]} key={idx} />
        ))}
      </tbody>
    </table>
  );
}
