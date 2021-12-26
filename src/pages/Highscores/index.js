import Container from "react-bootstrap/Container";

import Header from "../../components/Header";

const Highscores = (props) => {
  const { scores } = props;

  return (
    <>
      <Header page="highscores" />
      <Container className="highscores-container">
        <h1>Highscores</h1>
        <ol>
          {scores
            .sort((a, b) => (a.secondsLeft < b.secondsLeft ? 1 : -1))
            .map((score, i) => (
              <li key={i}>
                {score.initials}: {score.secondsLeft}
              </li>
            ))}
        </ol>
      </Container>
    </>
  );
};

export default Highscores;
