import { useEffect,useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";
import { CandidateDetails } from "../../components/candidate_details";
import  ReportTable  from "../../components/table";

export const CandidatesReports = () => {
    const [candidate,setCandidate]= useState(null);
    const[reports, setReports]= useState([])
    const params = useParams();
    useEffect(()=>{
        fetch(`http://localhost:3333/api/candidates/${params.id}`)
        .then(res=>res.json())
        .then(data=>setCandidate(data))
        fetch(`http://localhost:3333/api/reports?candidateId=${params.id}`)
        .then(res=>res.json())
        .then(data=>setReports(data))
    },[])
    
    return (
    <Container>
        {candidate ?  <CandidateDetails candidate={candidate}/> : null}
        <ReportTable reports={reports}/>
    </Container>)
}