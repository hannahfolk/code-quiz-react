import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const Intro = (props) => {
  const { handleStartClick } = props;

  return (
    <Container className="intro-container">
      <h1>Avatar: The Last Airbender Quiz</h1>
      <h5>
        Try to answer the following ATLA questions within the time limit. Keep
        in mind that incorrect answers will penalize your score/time by ten
        seconds!
      </h5>
      <Button onClick={handleStartClick}>Start Quiz</Button>
    </Container>
  );
};

export default Intro;
