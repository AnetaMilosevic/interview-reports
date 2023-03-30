import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { formatDate } from '../utils/format-date';

function ReportTable(props) {
    
  return (
    <Table striped bordered hover>

      <thead>
        <tr>
          <th>Company</th>
          <th>Interview date</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
       { props.reports.map((report)=> {
          return  <tr key={report.id} >  
                    <td>{report.companyName}</td>
                    <td>{formatDate(report.interviewDate)}</td>
                    <td style={{display:"flex", justifyContent:"space-between"}}>{report.status}  
                    <Button onClick={()=>props.setModalData(report)} ><i className="fa fa-eye" aria-hidden="true"></i></Button>  </td>
                  </tr> 
          }
       )}
      </tbody>
    </Table>
  ); 
}
export default ReportTable;