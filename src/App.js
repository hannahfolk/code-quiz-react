import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Quiz from "./pages/Quiz";
import Highscores from "./pages/Highscores";

import "./App.css";

const App = () => {
  const [scores, setScores] = useState(
    JSON.parse(localStorage.getItem("scores")) || []
  );

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Quiz scores={scores} />} />
        <Route
          exact
          path="/highscores"
          element={<Highscores scores={scores} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
