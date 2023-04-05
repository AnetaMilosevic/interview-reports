import Card from 'react-bootstrap/Card';

function CandidateReportCard(props) {
  return (
    <Card
      onClick={() => props.setSelectedCandidate(props.candidate)}
      style={{ display: 'flex', width: '45%' }}>
      <div>
        <Card.Img
          variant="top"
          src={props.candidate.avatar}
          alt="Avatar"
          style={{
            width: '50px',
            height: '50px',
            border: '2px solid grey',
            borderRadius: '50%',
            margin: '5px auto',
          }}
        />
      </div>
      <Card.Body>
        <Card.Title>{props.candidate.name}</Card.Title>
        <Card.Text>{props.candidate.email}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CandidateReportCard;
