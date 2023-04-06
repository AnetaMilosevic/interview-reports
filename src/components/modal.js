import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import { formatDate } from '../utils/format-date';
import { CandidateTexDetails } from './candidate_text_details';

export default function MyModal(props) {
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      aria-labelledby="contained-modal-title-vcenter"
      size="lg"
      centered
      style={{}}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.modalData.candidateName}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col xs={4} md={4}>
              <CandidateTexDetails
                title="Company:"
                content={props.modalData.companyName}
              />
              <CandidateTexDetails
                title="Interview date:"
                content={formatDate(props.modalData.interviewDate)}
              />
              <CandidateTexDetails
                title="Phase:"
                content={props.modalData.phase}
              />
              <CandidateTexDetails
                title="Status:"
                content={props.modalData.status}
              />
            </Col>
            <Col xs={8} md={8}>
              <CandidateTexDetails
                title="Note:"
                content={props.modalData.note}
              />
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

//function App() {
//  const [modalShow, setModalShow] = useState(false);

//  return (
//    <>
//      <Button variant="primary" onClick={() => setModalShow(true)}>
//        Launch modal with grid
//      </Button>

//      <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
//    </>
//  );
//}

//render(<App />);
