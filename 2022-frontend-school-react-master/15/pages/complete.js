import React, { useEffect, useState } from "react";

export default function complete() {
  const [choice, setChoice] = useState({ device: "", accessory: "" });

  useEffect(() => {
    const device = localStorage.getItem("selected_device");
    const accessory = localStorage.getItem("selected_accessory");

    setChoice({ device, accessory });
  }, []);

  return (
    <div className="container">
      <div className="wrapper">
        <h3 className="title">
          000 님이 선택하신 장비는 {choice.device}이고, 선택하신 악세사리는 {choice.accessory}
        </h3>
      </div>
    </div>
  );
}
