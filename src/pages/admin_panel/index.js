import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import AdminTable from '../../components/tableAdmin';
import MyModal from '../../components/modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { getReports } from '../../services/reportService';

export const AdminPanel = () => {
  const [reports, setReports] = useState([]);
  const [modalData, setModalData] = useState(null);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    getReports().then(data => setReports(data.data));
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
          display: 'flex',
          justifyContent: 'space-between',
          borderBottom: '1px solid lightgrey',
          marginTop: 20,
          marginBottom: 20,
          paddingBottom: 20,
        }}>
        <></>
        <InputGroup style={{ maxWidth: '200px' }}>
          <InputGroup.Text
            style={{ backgroundColor: 'white' }}
            id="basic-addon1">
            <i className="fa fa-search" aria-hidden="true"></i>
          </InputGroup.Text>
          <Form.Control
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
            placeholder="Search"
          />
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
