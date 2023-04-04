import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import AdminTable from '../../components/tableAdmin';
import MyModal from '../../components/modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export const AdminPanel = () => {
  const [reports, setReports] = useState([]);
  const [modalData, setModalData] = useState(null);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    fetch('http://localhost:3333/api/reports')
      .then(res => res.json())
      .then(data => setReports(data));
  }, []);
  const searchResult = reports.filter(
    report =>
      report.candidateName.toLowerCase().includes(searchValue.toLowerCase()) ||
      report.companyName.toLowerCase().includes(searchValue.toLowerCase()),
  );

  return (
    <div>
      <Container
        style={{
          padding: '20px',
          borderBottom: '1px solid lightgrey',
          margin: '20px',
        }}>
        <InputGroup className="mb-3" style={{ maxWidth: '200px' }}>
          <InputGroup.Text
            style={{ backgroundColor: 'white' }}
            id="basic-addon1">
            <i className="fa fa-search" aria-hidden="true"></i>
            <Form.Control
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
              placeholder="Search"
            />
          </InputGroup.Text>
        </InputGroup>
      </Container>
      <Container>
        <AdminTable
          reports={searchResult}
          setModalData={setModalData}
          setReports={setReports}
        />
      </Container>
      <Container>
        {modalData ? (
          <MyModal
            modalData={modalData}
            show={modalData ? true : false}
            onHide={() => setModalData(null)}
          />
        ) : null}
      </Container>
    </div>
  );
};
