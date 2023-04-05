import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation, useNavigate } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const handleCandidateClickOnCandidateReports = () => {
    if (location.pathname.includes('/CandidatesReports')) {
      navigate('/');
    }
  };
  const handleReportClick = () => {
    navigate('/AdminPanel');
  };
  const handleCreateReportPageClick = () => {
    navigate('/submitReportPage');
  };
  const headerText = () => {
    if (
      location.pathname.includes('/AdminPanel') ||
      location.pathname.includes('/submitReportPage')
    ) {
      return 'Reports Administration';
    }
    if (
      location.pathname.includes('/CandidatesReports') ||
      location.pathname.includes('/')
    ) {
      return 'Interviews reports';
    }
  };
  const adminButtons = () => {
    if (
      location.pathname.includes('/AdminPanel') ||
      location.pathname.includes('/submitReportPage')
    ) {
      return (
        <div>
          <Button onClick={handleReportClick}>Reports</Button>
          <Button onClick={handleCreateReportPageClick}>Create Report</Button>
        </div>
      );
    } else {
      return (
        <div>
          <Button onClick={handleCandidateClickOnCandidateReports}>
            Candidates
          </Button>
          <Button onClick={handleCreateReportPageClick}>Reports</Button>
        </div>
      );
    }
  };
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand onClick={() => navigate('/')}>
          {headerText()}
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>{adminButtons()}</Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
