import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation, useNavigate } from 'react-router-dom';

function Header() {
    const location = useLocation();
    const navigate = useNavigate();
    const handleCandidateClickOnCandidateReports = ()=>{
        if (location.pathname.includes("/CandidatesReports") ){
            navigate("/")
        }
    }
    const adminButtons= ()=>{
      if (location.pathname.includes("/AdminPanel")){
        return <p>Dugmici</p>;
      }
      else{
        return <Button onClick={handleCandidateClickOnCandidateReports}> Candidates</Button>;
      }
    }
    
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Interviews reports</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            {adminButtons()}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;