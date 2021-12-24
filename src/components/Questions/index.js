import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const Questions = (props) => {
  const { questions, questionIndex, handleAnswerClick } = props;

  const { question, answers, correct } = questions[questionIndex];

  return (
    <Container className="questions-container">
      <h1>{question}</h1>
      <div className="button-container">
        <Button onClick={handleAnswerClick} value={answers[0]}>
          {answers[0]}
        </Button>
        <Button onClick={handleAnswerClick} value={answers[1]}>
          {answers[1]}
        </Button>
        <Button onClick={handleAnswerClick} value={answers[2]}>
          {answers[2]}
        </Button>
        <Button onClick={handleAnswerClick} value={answers[3]}>
          {answers[3]}
        </Button>
      </div>
    </Container>
  );
};

export default Questions;
