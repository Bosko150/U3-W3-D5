import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import shufflebutton from "../assets/playerbuttons/shuffle.png";
import prevbutton from "../assets/playerbuttons/prev.png";
import playbutton from "../assets/playerbuttons/play.png";
import nextbutton from "../assets/playerbuttons/next.png";
import repeatbutton from "../assets/playerbuttons/repeat.png";
import { useSelector } from "react-redux";

const MusicPlayer = () => {
  const playerSong = useSelector((state) => state.player.content);

  const convertSecondsToMinutes = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };
  return playerSong ? (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row className="h-100 justify-content-center">
        <Col xs={6} md={2} className="align-items-center text-white d-flex">
          <img src={playerSong.album.cover_small} style={{ width: "50px", height: "50px" }} alt="" />
          <div className="ms-2 fs-custom">
            <span>{playerSong.album.title}</span>
            <br />
            <span>{playerSong.artist.name}</span>
          </div>
        </Col>
        <Col xs={6} className="playerControls">
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
          <p className="text-white text-center pt-1">
            {playerSong.title}
            <span className="text-white ps-3"> {convertSecondsToMinutes(playerSong.duration)}</span>
          </p>
        </Col>
      </Row>
    </Container>
  ) : (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row className="h-100 justify-content-center">
        <Col lg={10} className="offset-lg-2">
          <Row className="h-100 flex-column justify-content-center align-items-center">
            <Col xs={6} className="playerControls">
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

// <Col lg={10} className="offset-lg-2">
//             <Row className="h-100 flex-column justify-content-center align-items-center">
//               <Col xs={6} md={4} className="playerControls">
//                 <div className="d-flex">
//                   <a href="#">
//                     <img src={shufflebutton} alt="shuffle" />
//                   </a>
//                   <a href="#">
//                     <img src={prevbutton} alt="prev" />
//                   </a>
//                   <a href="#">
//                     <img src={playbutton} alt="play" />
//                   </a>
//                   <a href="#">
//                     <img src={nextbutton} alt="next" />
//                   </a>
//                   <a href="#">
//                     <img src={repeatbutton} alt="repeat" />
//                   </a>
//                 </div>
//                 <ProgressBar className="mt-3" />
//               </Col>
//             </Row>
//           </Col>
