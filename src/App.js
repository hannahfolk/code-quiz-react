import { useState } from "react";

import Header from "./components/Header";

import "./App.css";

const App = () => {
  const [secondsLeft, setSecondsLeft] = useState(75);

  const startTimer = () => {
    let timer = setInterval(() => {
      secondsLeft--;

      if (secondsLeft <= 0) {
        clearInterval(timer);
      }
    }, 1000);
  };

  return <Header secondsLeft={secondsLeft} />;
};

export default App;
