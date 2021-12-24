import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = (props) => {
  const { secondsLeft } = props;
  return (
    <Navbar>
      <Nav.Link href="/highscores">View Highscores</Nav.Link>
      <p className="time-span">
        Time Left:<span> {secondsLeft}</span>
      </p>
    </Navbar>
  );
};

export default Header;
