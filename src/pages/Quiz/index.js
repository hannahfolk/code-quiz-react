import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import Intro from "../../components/Intro";
import Questions from "../../components/Questions";
import End from "../../components/End";

import questions from "../../questions.json";

const Quiz = (props) => {
  const { scores } = props;

  const timer = useRef();

  const navigate = useNavigate();

  let [secondsLeft, setSecondsLeft] = useState(75);
  let [questionIndex, setQuestionIndex] = useState(0);
  const [showIntro, setShowIntro] = useState(true);
  const [showQuestions, setShowQuestions] = useState(false);
  const [showRightWrong, setShowRightWrong] = useState(false);
  const [rightWrong, setRightWrong] = useState("");
  const [showEnd, setShowEnd] = useState(false);
  const [initials, setInitials] = useState("");

  const startTimer = () => {
    timer.current = setInterval(() => {
      secondsLeft--;

      setSecondsLeft(secondsLeft);

      if (secondsLeft <= 0) {
        clearInterval(timer);
      }
    }, 1000);
  };

  const handleStartClick = () => {
    startTimer();
    setShowIntro(false);
    setShowQuestions(true);
  };

  const handleAnswerClick = (event) => {
    if (event.target.value === questions[questionIndex].correct) {
      setRightWrong("Correct!");
    } else {
      secondsLeft -= 10;
      setSecondsLeft(secondsLeft);
      clearInterval(timer.current);
      startTimer();
      setRightWrong("Wrong!");
    }

    setShowRightWrong(true);

    setTimeout(() => {
      setShowRightWrong(false);
    }, 1000);

    questionIndex++;
    setQuestionIndex(questionIndex);

    if (questionIndex >= 5) {
      setShowQuestions(false);
      setShowEnd(true);
      clearInterval(timer.current);
    }
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setInitials(value);
  };

  const handleInitialsSubmit = (event) => {
    event.preventDefault();

    scores.push({
      initials: initials.toUpperCase(),
      secondsLeft,
    });

    localStorage.setItem("scores", JSON.stringify(scores));
    navigate("/highscores");
  };

  return (
    <>
      <Header page="quiz" secondsLeft={secondsLeft} />
      {showIntro ? <Intro handleStartClick={handleStartClick} /> : null}
      {showQuestions ? (
        <Questions
          questions={questions}
          questionIndex={questionIndex}
          handleAnswerClick={handleAnswerClick}
        />
      ) : null}
      {showEnd ? (
        <End
          secondsLeft={secondsLeft}
          initials={initials}
          handleInputChange={handleInputChange}
          handleInitialsSubmit={handleInitialsSubmit}
        />
      ) : null}
      {showRightWrong ? <p className="right-wrong">{rightWrong}</p> : null}
    </>
  );
};

export default Quiz;
