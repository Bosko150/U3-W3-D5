import MySidebar from "./MySidebar";
import MainSection from "./MainSection";
import { Container, Row } from "react-bootstrap";
import MusicPlayer from "./MusicPlayer";
const HomePage = () => {
  return (
    <Container fluid>
      <Row>
        <MySidebar />
        <MainSection />
        <MusicPlayer />
      </Row>
    </Container>
  );
};

export default HomePage;
