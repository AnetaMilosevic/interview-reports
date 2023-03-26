import React,{useState,useEffect} from "react";
import CardCandidates from "../../components/card";
import Container from 'react-bootstrap/Container';


export const Candidates = () => {
    const [candidates,setCandidates]= useState([])
    
    useEffect(()=>{
        fetch("http://localhost:3333/api/candidates")
        .then(res=>res.json())
        .then(data=>setCandidates(data))
    },[])

    const allCandidates = candidates.map((candidat)=><CardCandidates candidat={candidat} key={candidat.id}/>)
    
    return (
    <Container  style={{display:"flex",flexWrap:"wrap", gap:"10px", justifyContent:"center"}}>
      {allCandidates}
    </Container>)
}