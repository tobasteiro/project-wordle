import React from "react";
import { range } from "../../utils";

function Guess({ correctedWordArray, answer, setAsserted }) {
  return (
    <>
      {range(5).map((num) => (
        <span
          key={num}
          className={
            "cell " + (correctedWordArray ? correctedWordArray[num].status : "")
          }
        >
          {correctedWordArray && correctedWordArray[num].letter}
        </span>
      ))}
    </>
  );
}

export default Guess;
