import React, { useState, useEffect } from 'react';
import CardCandidates from '../../components/card';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios';

export const Candidates = () => {
  const [candidates, setCandidates] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3333/api/candidates')
      .then(data => setCandidates(data.data));
  }, []);

  const searchCandidates = candidates
    .filter(candidat =>
      candidat.name.toLowerCase().includes(searchValue.toLowerCase()),
    )
    .map(candidat => <CardCandidates candidat={candidat} key={candidat.id} />);

  return (
    <div>
      <Container
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          borderBottom: '1px solid lightgrey',
          margin: 20,
        }}>
        <h3>Candidates</h3>
        <InputGroup className="mb-3" style={{ maxWidth: '200px' }}>
          <InputGroup.Text
            style={{ backgroundcolor: 'white' }}
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

      <Container
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          justifyContent: 'center',
        }}>
        {searchCandidates}
      </Container>
    </div>
  );
};
