import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function CardCandidates(props) {
  return (
    <Link to ={`/CandidatesReports/${props.candidat.id}`} style={{ width: '30%',border:"2px solid grey"}}>
    <Card >
      <Card.Img variant="top" src={props.candidat.avatar} alt="Avatar" style={{width:"75%",border:"2px solid grey", borderRadius:"50%", margin:"5px auto"}}/>
      <Card.Body>
        <Card.Title>{props.candidat.name}</Card.Title>
        <Card.Text>{props.candidat.email}</Card.Text>
      </Card.Body>
    </Card>
    </Link>
  );
}

export default CardCandidates;