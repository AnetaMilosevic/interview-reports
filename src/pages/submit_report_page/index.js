import { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { AddReportUserSection } from '../../components/add_reports_user_section';

export const SubmitReportPage = () => {
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [selectedStep, setSelectedStep] = useState('selectCandidate');
  console.log(selectedCandidate);
  const selectSection = () => {
    if (selectedStep === 'selectCandidate') {
      return (
        <AddReportUserSection
          selectedCandidate={selectedCandidate}
          setSelectedCandidate={setSelectedCandidate}
        />
      );
    }

    return null;
  };
  const handleNextClick = () => {
    if (selectedStep === 'selectCandidate') {
      setSelectedStep('selectCompany');
    }
  };
  return (
    <Container style={{ display: 'flex', height: '85vh', padding: '50px' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 2,
          borderRight: '1px solid black',
        }}>
        <p>
          <span>1</span> Select Candidate
        </p>
        <p>
          <span>2</span> Select Company
        </p>
        <p>
          <span>3</span> Fill Report Details
        </p>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 5,
          padding: '15px',
        }}>
        <div style={{ display: 'flex' }}>{selectSection()}</div>
        <Button
          style={{ marginTop: '15px', alignSelf: 'flex-end' }}
          onClick={handleNextClick}>
          Next
        </Button>
      </div>
    </Container>
  );
};
