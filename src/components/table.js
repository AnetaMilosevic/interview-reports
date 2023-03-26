import Table from 'react-bootstrap/Table';
import { formatDate } from '../utils/format-date';

function ReportTable(props) {
    console.log (props.reports)
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
       { props.reports.map((report)=> 
       {return  <tr> 
        <td>{report.companyName}</td>
        <td>{formatDate(report.interviewDate)}</td>
        <td>{report.status}</td>
               </tr> }
       )}
   
      </tbody>
    </Table>
  );
  
}

export default ReportTable;