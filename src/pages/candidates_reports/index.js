import { useEffect,useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router"
import { CandidateDetails } from "../../components/candidate_details";


export const CandidatesReports = () => {
    const [candidate,setCandidate]= useState(null);
    const params = useParams();
    useEffect(()=>{
        fetch(`http://localhost:3333/api/candidates?candidateId=${params.id}`, {method:"POST"})
        .then(res=>res.json())
        .then(data=>setCandidate(data))
        fetch(`http://localhost:3333/api/reports?candidateId=${params.id}`, {method:"POST"})
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[])
    

    return (
    <Container>
        {candidate ?  <CandidateDetails candidate={candidate}/> : null}
    </Container>)
}