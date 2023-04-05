import { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { AddReportUserSection } from '../../components/add_reports_user_section';
import { AddReportCompanySection } from '../../components/add_reports_company_section';
import { AddReportInfo } from '../../components/add_report_info';
import { CandidateTexDetails } from '../../components/candidate_text_details';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const SubmitReportPage = () => {
  const navigate = useNavigate();
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [selectedStep, setSelectedStep] = useState('selectCandidate');
  const [reportInfoData, setReportInfoData] = useState(null);

  const selectSection = () => {
    if (selectedStep === 'selectCandidate') {
      return (
        <AddReportUserSection
          selectedCandidate={selectedCandidate}
          setSelectedCandidate={setSelectedCandidate}
        />
      );
    } else if (selectedStep === 'selectCompany') {
      return (
        <AddReportCompanySection
          selectedCompany={selectedCompany}
          setSelectedCompany={setSelectedCompany}
        />
      );
    } else if (selectedStep === 'reportInfo') {
      return <AddReportInfo setReportInfoData={setReportInfoData} />;
    }
  };
  const handleNextClick = () => {
    if (selectedStep === 'selectCandidate') {
      setSelectedStep('selectCompany');
    }
    if (selectedStep === 'selectCompany') {
      setSelectedStep('reportInfo');
    }
    if (selectedStep === 'reportInfo') {
      handleSubmitClick();
    }
  };

  const handleBackClick = () => {};
  const handleSubmitClick = () => {
    axios
      .post('http://localhost:3333/api/reports', {
        candidateId: selectedCandidate.id,
        candidateName: selectedCandidate.name,
        companyId: selectedCompany.id,
        companyName: selectedCompany.name,
        ...reportInfoData,
      })
      .then(res => navigate('/AdminPanel'));
  };
  return (
    <Container style={{ display: 'flex', minHeight: '85vh', padding: '50px' }}>
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
        <div>
          {selectedStep !== 'selectCandidate' ? (
            <div style={{ borderTop: '2px solid black' }}>
              <CandidateTexDetails
                title="Candidate:"
                content={selectedCandidate.name}
              />
            </div>
          ) : null}
          {selectedStep !== 'selectCompany' &&
          selectedStep !== 'selectCandidate' ? (
            <CandidateTexDetails
              title="Company:"
              content={selectedCompany.name}
            />
          ) : null}
        </div>
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
          style={{ marginTop: '15px', alignSelf: 'flex-start' }}
          onClick={handleBackClick}>
          Back
        </Button>
        <Button
          style={{ marginTop: '15px', alignSelf: 'flex-end' }}
          onClick={handleNextClick}>
          Next
        </Button>
      </div>
    </Container>
  );
};
