import { useEffect,useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";
import { CandidateDetails } from "../../components/candidate_details";
import MyModal from "../../components/modal";
import  ReportTable  from "../../components/table";

export const CandidatesReports = () => {
    const [candidate,setCandidate]= useState(null);
    const [reports, setReports]= useState([]);
    const [modalData,setModalData]= useState(null);
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
        <Container style={{margin:"20px"}}>
            {candidate ?  <CandidateDetails candidate={candidate}/> : null}
        </Container>
            <ReportTable reports={reports} setModalData={setModalData} />
        <Container>
            {modalData?
            <MyModal modalData={modalData} show={ modalData ? true : false } onHide={ ()=> setModalData(null) } />
            : null
            }
       </Container>
    </Container>)
}