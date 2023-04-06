import { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { AddReportUserSection } from '../../components/add_reports_user_section';
import { AddReportCompanySection } from '../../components/add_reports_company_section';
import { AddReportInfo } from '../../components/add_report_info';
import { CandidateTexDetails } from '../../components/candidate_text_details';
import { useNavigate } from 'react-router-dom';
import { postReport } from '../../services/reportService';

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
    if (selectedStep === 'selectCandidate' && selectedCandidate) {
      setSelectedStep('selectCompany');
    }
    if (selectedStep === 'selectCompany' && selectedCompany) {
      setSelectedStep('reportInfo');
    }
    if (selectedStep === 'reportInfo') {
      handleSubmitClick();
    }
  };

  const handleBackClick = () => {
    if (selectedStep === 'selectCompany') {
      setSelectedStep('selectCandidate');
    }
    if (selectedStep === 'reportInfo') {
      setSelectedStep('selectCompany');
    }
  };

  const handleSubmitClick = () => {
    const body = {
      candidateId: selectedCandidate.id,
      candidateName: selectedCandidate.name,
      companyId: selectedCompany.id,
      companyName: selectedCompany.name,
      ...reportInfoData,
    };
    postReport(body).then(() => navigate('/AdminPanel'));
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
        <p
          style={{
            fontWeight: selectedStep === 'selectCandidate' ? 'bold' : 'normal',
            fontSize: '20px',
          }}>
          <span>1</span> Select Candidate
        </p>
        <p
          style={{
            fontWeight: selectedStep === 'selectCompany' ? 'bold' : 'normal',
            fontSize: '20px',
          }}>
          <span>2</span> Select Company
        </p>
        <p
          style={{
            fontWeight: selectedStep === 'reportInfo' ? 'bold' : 'normal',
            fontSize: '20px',
          }}>
          <span>3</span> Fill Report Details
        </p>
        <div>
          {selectedStep !== 'selectCandidate' ? (
            <div
              style={{
                borderTop: '1px solid black',
                paddingTop: 20,
                marginRight: 30,
              }}>
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
        <div
          style={{
            display: 'flex',
            justifyContent:
              selectedStep === 'selectCompany' || selectedStep === 'reportInfo'
                ? 'space-between'
                : 'flex-end',
            marginTop: 15,
          }}>
          {selectedStep === 'selectCompany' || selectedStep === 'reportInfo' ? (
            <Button onClick={handleBackClick}>Back</Button>
          ) : null}
          <Button onClick={handleNextClick}>
            {selectedStep === 'reportInfo' ? 'Submit' : 'Next'}
          </Button>
        </div>
      </div>
    </Container>
  );
};
