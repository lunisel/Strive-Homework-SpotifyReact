import { Col, Row } from "react-bootstrap";

const Player = (props) => {
  return (
    <div className="player">
      <Row>
        <Col md={2}></Col>
        <Col md={8}></Col>
        <Col md={2}></Col>
      </Row>
    </div>
  );
};

export default Player;
