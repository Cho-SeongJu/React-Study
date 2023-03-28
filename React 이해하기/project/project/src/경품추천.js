import React, { useEffect, useState } from "react";
import datas from "./raffle/data/card.js";
import BusinessCard from "./raffle/components/BusinessCard.js";

// 추첨하기 버튼과 명함 컴포넌트를 구현
function App() {
  const [cards, setCards] = useState([]);
  const [pickedCards, setPickedCards] = useState([]);
  function draw() {
    // 조건 추가
    if (pickedCards.length > 2) {
      const names = pickedCards.reduce((acc, cur) => {
        return (acc = acc.concat(`${cur.name}, `));
      }, "");
      return alert(`당첨자는 ${names} 입니다.`);
    }

    // 추첨하기 버튼을 누르면, 랜덤하게 하나의 명함을 고른다.
    const randomIdx = Math.floor(Math.random() * cards.length);
    const randomItem = cards[randomIdx];

    // 중복 제거
    console.log(cards.filter((c) => c.phoneNumber !== randomItem.phoneNumber));
    setCards(cards.filter((c) => c.phoneNumber !== randomItem.phoneNumber)); // 요소들이 randomItem과 동일하지 않은 값들 true 값만

    // 당첨자(array) 관리
    setPickedCards([...pickedCards, randomItem]); // spread 문법으로 concat과 동일함 이렇게 하면 이전 배열과 지금 데이터를 더하는 것
  }

  useEffect(() => {
    // api 호출
    // cards를 state로 관리
    setCards(datas);
  }, []);

  console.log(cards);
  console.log(pickedCards);

  const result = pickedCards.map((pickedCard) => <BusinessCard info={pickedCard} key={pickedCard.phoneNumber} />);
  console.log(result);
  return (
    <div>
      {cards.length > 0 && <button onClick={draw}>추첨하기</button>}
      {/* {pickedCards.length > 0 && <BusinessCard info={pickedCards[pickedCards.length - 1]} />} */}
      {/* {pickedCards.length > 0 && pickedCards.map((pickedCard) => <BusinessCard info={pickedCard} />)} */}
      {pickedCards.length > 0 && result}
    </div>
  );
}

export default App;
