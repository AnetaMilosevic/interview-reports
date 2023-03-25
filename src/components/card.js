import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function CardCandidates(props) {
    console.log(props)
  return (
    <Link to ="/CandidatesReports" style={{ width: '30%'}}>
    <Card >
      <Card.Img variant="top" src={props.candidat.avatar} />
      <Card.Body>
        <Card.Title>{props.candidat.name}</Card.Title>
        <Card.Text>
          {props.candidat.email}
        </Card.Text>
      </Card.Body>
    </Card>
    </Link>
  );
}

export default CardCandidates;