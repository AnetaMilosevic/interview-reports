import Card from 'react-bootstrap/Card';

function CompanyReportCard(props) {
  const isSelected =
    props.selectedCompany && props.selectedCompany.id === props.company.id;
  return (
    <Card
      onClick={() => props.setSelectedCompany(props.company)}
      style={{
        display: 'flex',
        width: '100%',
        backgroundColor: isSelected ? 'lightblue' : 'white',
        marginBottom: 10,
      }}>
      <Card.Body>
        <Card.Title>{props.company.name}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default CompanyReportCard;
