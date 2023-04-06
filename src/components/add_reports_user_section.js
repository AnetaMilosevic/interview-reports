import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { getCandidates } from '../services/candidateService';
import CandidateReportCard from './candidateReportCard';

export const AddReportUserSection = props => {
  const [candidates, setCandidates] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    getCandidates().then(data => setCandidates(data.data));
  }, []);

  const searchCandidates = candidates
    .filter(candidate =>
      candidate.name.toLowerCase().includes(searchValue.toLowerCase()),
    )
    .map(candidate => (
      <CandidateReportCard
        candidate={candidate}
        key={candidate.id}
        selectedCandidate={props.selectedCandidate}
        setSelectedCandidate={props.setSelectedCandidate}
      />
    ));

  return (
    <div>
      <InputGroup className="mb-3" style={{ maxWidth: '200px' }}>
        <InputGroup.Text style={{ backgroundColor: 'white' }} id="basic-addon1">
          <i className="fa fa-search" aria-hidden="true"></i>
        </InputGroup.Text>
        <Form.Control
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
          placeholder="Search"
        />
      </InputGroup>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {searchCandidates}
      </div>
    </div>
  );
};
