import React, { useRef, useEffect } from "react";

export interface DOMProps {}

const DOM: React.SFC<DOMProps> = () => {
  const elRef = useRef() as React.MutableRefObject<HTMLParagraphElement>;

  useEffect(() => {
    elRef.current.innerText = "HOLA MUNDIAL!";
  }, [elRef]);

  return (
    <>
      <h1>DOM Element</h1>
      <p>The following effects are used in this example:</p>
      <ul>
        <li>useRef - this stores the reference to the DOM element.</li>
        <li>
          useEffect - this captures changes to the ref, and manipulates the DOM
          when the ref captures the HTML element.
        </li>
      </ul>
      <p ref={elRef}></p>
    </>
  );
};

export default DOM;
