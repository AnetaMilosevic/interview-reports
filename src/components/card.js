import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import './index.css';

function CardCandidates(props) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/CandidatesReports/${props.candidate.id}`)}
      style={{ width: '30%', border: '2px solid grey' }}>
      <Card className="card">
        <Card.Img
          variant="top"
          src={props.candidate.avatar}
          alt="Avatar"
          style={{
            width: '75%',
            border: '2px solid grey',
            borderRadius: '50%',
            margin: '5px auto',
          }}
        />
        <Card.Body>
          <Card.Title>{props.candidate.name}</Card.Title>
          <Card.Text>{props.candidate.email}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardCandidates;
