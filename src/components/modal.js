import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import { CandidateTexDetails } from './candidate_text_details';

export default function MyModal(props) {
    console.log(props.modalData)
  return (
    <Modal show={props.show} onHide={props.onHide} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.modalData.candidateName}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col xs={12} md={8}>
              <CandidateTexDetails title="Company:" content={props.modalData.companyName}/>
              <CandidateTexDetails title="Interview date:" content={props.modalData.interviewDte}/>
              <CandidateTexDetails title="Phase:" content={props.modalData.phase}/>
              <CandidateTexDetails title="Status:" content={props.modalData.status}/>
            </Col>
            <Col xs={6} md={4}>
            <CandidateTexDetails title="Note:" content={props.modalData.note}/>
            </Col>
          </Row>
         
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
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