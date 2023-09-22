import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

function FormInput({
  wordsList,
  setWordsList,
  maxGuessesReached,
  setMaxGuessesReached,
  asserted,
  setAsserted,
  answer,
}) {
  const [word, setWord] = React.useState("");

  function submitForm(event) {
    event.preventDefault();

    const correctedWordArray = checkGuess(word, answer);

    const nextWords = [...wordsList, correctedWordArray];
    setWordsList(nextWords);
    setWord("");

    setAsserted(
      correctedWordArray.map(({ status }) => status === "correct").length === 5
    );
    if (wordsList.length >= NUM_OF_GUESSES_ALLOWED - 1) {
      setMaxGuessesReached(true);
      return;
    }
  }

  function handleChangeInput(event) {
    setWord(event.target.value.toUpperCase());
  }

  return (
    <>
      <form
        className="guess-input-wrapper"
        onSubmit={(event) => submitForm(event)}
      >
        <label htmlFor="word-input">Enter guess:</label>
        <input
          id="word-input"
          type-="text"
          value={word}
          onChange={(event) => handleChangeInput(event)}
          maxLength={5}
          pattern="[A-Za-z]{5}"
          required
          disabled={maxGuessesReached || asserted}
        />
      </form>
    </>
  );
}

export default FormInput;
