import React from "react";
import { useRef } from "react";
import "./Form.scss";

export const Form = () => {
  let refFirstName = useRef(null);
  let refLastName = useRef(null);

  const OnhandleClick = () => {
    let firstName = refFirstName.current.value;
    let lastName = refLastName.current.value;
    alert("Hello" + " " + firstName + lastName + "!");
    refFirstName.current.value = " ";
    refLastName.current.value = " ";
  };

  return (
    <div className="form">
      <input ref={refFirstName} placeholder="Firt name" type="text" />
      <br />
      <input ref={refLastName} placeholder="Last name" type="text" />
      <br />
      <button onClick={OnhandleClick}>GREET ME</button>
    </div>
  );
};
