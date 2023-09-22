import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Board from "../Board/Board";
import FormInput from "../FormInput/FormInput";
import BannerWinner from "../BannerWinner";
import BannerLoser from "../BannerLoser";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [wordsList, setWordsList] = React.useState([]);
  const [maxGuessesReached, setMaxGuessesReached] = React.useState(false);
  const [asserted, setAsserted] = React.useState(false);
  return (
    <>
      <Board
        wordsList={wordsList}
        answer={answer}
        asserted={asserted}
        setAsserted={setAsserted}
      />
      <FormInput
        wordsList={wordsList}
        setWordsList={setWordsList}
        maxGuessesReached={maxGuessesReached}
        setMaxGuessesReached={setMaxGuessesReached}
        asserted={asserted}
        answer={answer}
        setAsserted={setAsserted}
      />
      {asserted && <BannerWinner guesses={wordsList.length} />}
      {maxGuessesReached && <BannerLoser answer={answer} />}
    </>
  );
}

export default Game;
