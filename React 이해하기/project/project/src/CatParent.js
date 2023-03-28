import React, { useRef } from "react";
import Cat from "./Cat";

// Cat안에 있는 image 사이즈를 알고 싶다 !
export default function CatParent() {
  console.log("부모 컴포넌트 CatParent");

  const catRef = useRef();
  console.log(catRef);
  return (
    <div>
      <h4> 고양이가 세상을 구한다 ️</h4>
      <div>
        <Cat ref={catRef} />
        <button onClick={() => alert(catRef.current.height)}>고양이의 크기를 알고 싶어</button>
      </div>
    </div>
  );
}
