import React from "react";
import image from "../images/image.png";

export default function Welcome({ withImg, firstName, lastName }) {
  // image + hello, firstName, lastName

  return (
    <>
      {withImg && <img src={image} alt="welcome newjeansRabbit" height="200"></img>}
      <div>Hello!</div>
      <div>
        <span>{firstName}</span>
        {lastName}
      </div>
    </>
  );
}
