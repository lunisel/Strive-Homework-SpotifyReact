import { Container, Row } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <Container fluid>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>

      <Row></Row>
    </Container>
  );
};

export default Home;
