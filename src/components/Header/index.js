import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = (props) => {
  const { page, secondsLeft } = props;
  
  return (
    <Navbar>
      {page === "quiz" ? (
        <>
          <Nav.Link href="/highscores">View Highscores</Nav.Link>
          <p className="time-span">
            Time Left:<span> {secondsLeft}</span>
          </p>
        </>
      ) : (
        <Nav.Link href="/">Go to Quiz</Nav.Link>
      )}
    </Navbar>
  );
};

export default Header;
