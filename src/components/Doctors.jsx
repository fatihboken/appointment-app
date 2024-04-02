import { Container, Row, Col, Image } from "react-bootstrap";
import { doctorData } from "../helper/Data";

const Doctors = () => {
  console.log(doctorData);
  console.log(Doctors);
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
            />
            <h5>{name}</h5>
            <p>{dep}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Doctors;
