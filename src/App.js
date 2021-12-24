import { useState } from "react";
import Container from "react-bootstrap/Container";

import Header from "./components/Header";
import Intro from "./components/Intro";
import Questions from "./components/Questions";
import End from "./components/End";

import questions from "./questions.json";
import "./App.css";

const App = () => {
  let [timer, setTimer] = useState("");
  let [secondsLeft, setSecondsLeft] = useState(75);
  let [questionIndex, setQuestionIndex] = useState(0);
  const [showIntro, setShowIntro] = useState(true);
  const [showQuestions, setShowQuestions] = useState(false);
  const [showRightWrong, setShowRightWrong] = useState(false);
  const [rightWrong, setRightWrong] = useState("");
  const [showEnd, setShowEnd] = useState(false);
  const [initials, setInitials] = useState("");

  const startTimer = () => {
    let timer = setInterval(() => {
      secondsLeft--;

      setSecondsLeft(secondsLeft);

      if (secondsLeft <= 0) {
        clearInterval(timer);
      }
    }, 1000);

    setTimer(timer);
  };

  const handleStartClick = () => {
    startTimer();
    setShowIntro(false);
    setShowQuestions(true);
  };

  const handleAnswerClick = (event) => {
    event.target.value === questions[questionIndex].correct
      ? setRightWrong("Correct!")
      : setRightWrong("Wrong!");

    setShowRightWrong(true);

    setTimeout(() => {
      setShowRightWrong(false);
    }, 1000);

    secondsLeft -= 10;
    setSecondsLeft(secondsLeft);

    questionIndex++;
    setQuestionIndex(questionIndex);

    if (questionIndex >= 5) {
      clearInterval(timer);
      setShowQuestions(false);
      setShowEnd(true);
    }
  };

  const handleInputChange = (event) => {
    const { value } = event.target.value;
    setInitials(value);
  };

  const handleInitialsSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Header secondsLeft={secondsLeft} />
      {showIntro ? <Intro handleStartClick={handleStartClick} /> : null}
      {showQuestions ? (
        <Questions
          questions={questions}
          questionIndex={questionIndex}
          handleAnswerClick={handleAnswerClick}
        />
      ) : null}
      {showRightWrong ? <p className="right-wrong">{rightWrong}</p> : null}
      {showEnd ? (
        <End
          secondsLeft={secondsLeft}
          initials={initials}
          handleInputChange={handleInputChange}
          handleInitialsSubmit={handleInitialsSubmit}
        />
      ) : null}
    </>
  );
};

export default App;
