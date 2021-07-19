import { Col, Row, Button, Dropdown } from "react-bootstrap";

const FixedNav = (prop) => {
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
        <Col md={4} className="d-flex">
          <Button>UPGRADE</Button>
          <Dropdown>
            <Dropdown.Toggle>
              <img src="https://180dc.org/wp-content/uploads/2017/11/profile-placeholder.png" alt="profile-pic" className="img-fluid"/>
              <span>{prop.name}</span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>{prop.name}</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
    </div>
  );
};

export default FixedNav;
