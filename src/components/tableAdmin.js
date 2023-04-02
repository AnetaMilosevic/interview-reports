import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { formatDate } from '../utils/format-date';
import { AdminTexDetails } from './tableAdminText';

function AdminTable(props) {
  const handleDelete = report => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      fetch(`http://localhost:3333/api/reports/${report.id}`, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(report),
      }).then();
    }
  };
  return (
    <Table striped bordered hover>
      <tbody>
        {props.reports.map(report => {
          return (
            <tr key={report.id}>
              <td>
                <AdminTexDetails
                  content={report.companyName}
                  title={'Company'}
                />
              </td>
              <td>
                <AdminTexDetails
                  content={report.candidateName}
                  title="Candidate"
                />
              </td>
              <td>
                <AdminTexDetails
                  content={formatDate(report.interviewDate)}
                  title={'Interview date'}
                />
              </td>
              <td style={{ display: 'flex', justifyContent: 'space-between' }}>
                <AdminTexDetails content={report.status} title={'Status'} />
                <Button onClick={() => props.setModalData(report)}>
                  <i className="fa fa-eye" aria-hidden="true"></i>
                </Button>
              </td>
              <td>
                <Button onClick={() => handleDelete(report)}>
                  <i className="fa fa-cancel" aria-hidden="true">
                    X
                  </i>
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
export default AdminTable;
