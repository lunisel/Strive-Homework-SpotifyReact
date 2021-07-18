import { Col, Row, Button } from "react-bootstrap";

const FixedNav = () => {
  return (
    <div className="fixed">
      <Row className="row-fixed m-0">
        <Col md={3} className="c-arrows">
          <div className="cont-arrow">
            <div className="left"></div>
          </div>
          <div className="cont-arrow">
            <div className="right"></div>
          </div>
        </Col>
        <Col md={3}>
          <Button>UPGRADE</Button>
        </Col>
      </Row>
    </div>
  );
};

export default FixedNav;
