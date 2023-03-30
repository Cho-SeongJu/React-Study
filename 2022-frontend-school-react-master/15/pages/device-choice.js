import React, { useState } from "react";
import { useRouter } from "next/router";
import BottomButton from "../src/components/BottomButton";
import Radio from "../src/components/Radio";
import RadioGroup from "../src/components/RadioGroup";

export default function deviceChoice() {
  const router = useRouter();
  const [selectedDevice, setSelectedDevice] = useState("");

  const goNextPage = () => {
    // 로컬스토리지에 저장
    localStorage.setItem("selected_device", selectedDevice);
    router.push("/accessory-choice");
  };

  console.log(selectedDevice);

  return (
    <div className="container">
      <div className="wrapper">
        <h3 className="title">아이맥과 맥북 중 원하는 장비를 선택해주세요.</h3>
      </div>
      <RadioGroup name="accessory" onChange={(state) => setSelectedDevice(state)}>
        <Radio id="iMac" name="device" value="iMac" label="iMac" />
        <Radio id="macBook" name="device" value="macBook" label="macBook" />
      </RadioGroup>
      <BottomButton onClick={goNextPage}>악세서리 선택 화면으로 넘어가기</BottomButton>
    </div>
  );
}
