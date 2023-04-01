import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function CompanyReportCard(props) {
  console.log(props)
  return (
    <Card
      onClick={() => props.setSelectedCompany(props.company)}
      style={{ display: 'flex', width:"90%" }}>
      <Card.Body>
        <Card.Title>{props.company.name}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default CompanyReportCard;
