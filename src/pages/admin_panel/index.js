import { useEffect, useState } from "react"
import { Container } from "react-bootstrap";
import AdminTable from "../../components/tableAdmin";
import  MyModal  from "../../components/modal"

export const AdminPanel=()=>{

    const [reports,setReports]= useState([]);
    const [modalData,setModalData]= useState(null);

    useEffect(()=>{
        fetch("http://localhost:3333/api/reports")
        .then(res=>res.json())
        .then(data=>setReports(data))
    },[])

    return (
    <div>
        <Container>
            <AdminTable reports={reports} setModalData={setModalData}/>
        </Container>
        <Container>
        {modalData?
        <MyModal modalData={modalData} show={ modalData ? true : false } onHide={ ()=> setModalData(null) } />
        : null
        }
        </Container>
   </div>
    )


}
