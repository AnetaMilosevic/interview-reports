import { useEffect,useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router"
import { CandidateDetails } from "../../components/candidate_details";


export const CandidatesReports = () => {
    const [candidate,setCandidate]= useState(null);
    const params = useParams();
    useEffect(()=>{
        fetch(`http://localhost:3333/api/candidates/${params.id}`)
        .then(res=>res.json())
        .then(data=>setCandidate(data))
    },[])
    
    return (
    <Container>
        {candidate ?  <CandidateDetails candidate={candidate}/> : null}
    </Container>)
}