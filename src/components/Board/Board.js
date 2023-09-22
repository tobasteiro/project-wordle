import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import Guess from "../Guess/Guess";

function Board({ wordsList, answer, setAsserted }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <p key={num} className="guess">
          <Guess
            correctedWordArray={wordsList.length >= num && wordsList[num]}
            answer={answer}
            setAsserted={setAsserted}
          />
        </p>
      ))}
    </div>
  );
}

export default Board;
