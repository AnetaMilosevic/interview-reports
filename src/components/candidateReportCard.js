import Card from 'react-bootstrap/Card';

function CandidateReportCard(props) {
  const isSelected =
    props.selectedCandidate &&
    props.selectedCandidate.id === props.candidate.id;
  return (
    <div
      onClick={() => props.setSelectedCandidate(props.candidate)}
      style={{
        display: 'flex',
        width: '45%',
        border: `1px solid ${isSelected ? 'lightblue' : 'lightgrey'}`,
        overflow: 'hidden',
        alignItems: 'center',
        backgroundColor: isSelected ? 'lightblue' : 'white',
      }}>
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
            margin: '15px',
          }}
        />
      </div>
      <Card.Body>
        <Card.Title>{props.candidate.name}</Card.Title>
        <Card.Text>{props.candidate.email}</Card.Text>
      </Card.Body>
    </div>
  );
}

export default CandidateReportCard;
