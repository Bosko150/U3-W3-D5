import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import shufflebutton from "../assets/playerbuttons/shuffle.png";
import prevbutton from "../assets/playerbuttons/prev.png";
import playbutton from "../assets/playerbuttons/play.png";
import nextbutton from "../assets/playerbuttons/next.png";
import repeatbutton from "../assets/playerbuttons/repeat.png";

const MusicPlayer = () => {
  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row className="h-100">
        <Col lg={10} className="offset-lg-2">
          <Row className="h-100 flex-column justify-content-center align-items-center">
            <Col xs={6} md={4} className="playerControls">
              <div className="d-flex">
                <a href="#">
                  <img src={shufflebutton} alt="shuffle" />
                </a>
                <a href="#">
                  <img src={prevbutton} alt="prev" />
                </a>
                <a href="#">
                  <img src={playbutton} alt="play" />
                </a>
                <a href="#">
                  <img src={nextbutton} alt="next" />
                </a>
                <a href="#">
                  <img src={repeatbutton} alt="repeat" />
                </a>
              </div>
              <ProgressBar className="mt-3" />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MusicPlayer;
