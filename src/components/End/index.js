import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

const End = (props) => {
  const { secondsLeft, initials, handleInputChange, handleInitialsSubmit } =
    props;

  return (
    <Container className="end-container">
      <h1>All done!</h1>
      <p>Your final score is {secondsLeft}.</p>
      <Form className="initials-form-container" onSubmit={handleInitialsSubmit}>
        <Form.Group className="mb-3 initials-form">
          <Form.Label>Enter Initials:</Form.Label>
          <Form.Control
            type="text"
            value={initials}
            onChange={handleInputChange}
          />
          <Button type="submit">Submit</Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default End;
