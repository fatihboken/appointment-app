import { Container, Row, Col, Image } from "react-bootstrap";
import { doctorData } from "../helper/Data";
import AddModal from "./AddModal";
import { useState } from "react";

const Doctors = () => {
  const [showModal, setShow] = useState(false);
  const [drName, setDrName] = useState("");
  return (
    <Container>
      <h3 className="display-6 mb-3">Doctors</h3>
      <Row>
        {doctorData.map(({ id, img, name, dep }) => (
          <Col xs={6} s={4} lg={3} key={id}>
            <Image
              className="img-thumbnail doctor-img w-100"
              src={img}
              alt={name}
              onClick={() => {
                setShow(true);
                setDrName(name); 
              }}
            />
            <h5>{name}</h5>
            <p>{dep}</p>
          </Col>
        ))}
      </Row>
      <AddModal showModal={showModal} handleClose={() => setShow(false)} drName={drName} />
    </Container>
  );
};

export default Doctors;
