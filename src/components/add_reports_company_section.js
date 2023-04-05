import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import CompanyReportCard from './companyReportCard';

export const AddReportCompanySection = props => {
  const [companies, setCompanies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    fetch('http://localhost:3333/api/companies')
      .then(res => res.json())
      .then(data => setCompanies(data));
  }, []);

  const searchCompanies = companies
    .filter(company =>
      company.name.toLowerCase().includes(searchValue.toLowerCase()),
    )
    .map(company => (
      <CompanyReportCard
        company={company}
        key={company.id}
        selectedCompany={props.selectedCompany}
        setSelectedCompany={props.setSelectedCompany}
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
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>{searchCompanies}</div>
    </div>
  );
};
