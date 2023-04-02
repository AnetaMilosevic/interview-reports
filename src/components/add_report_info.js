import { Form, InputGroup } from 'react-bootstrap';
import SelectPhase from './select';
import { useState } from 'react';

export const AddReportInfo = () => {
  const [date, setDate] = useState(new Date());
  const [phase, setPhase] = useState('0');
  const [status, setStatus] = useState('0');
  const [note, setNote] = useState('');
  console.log(status);
  return (
    <div>
      <div style={{ display: 'flex', width: '100%' }}>
        <div style={{ width: '30%' }}>
          <Form.Group controlId="dob">
            <Form.Label>Interview Date:</Form.Label>
            <Form.Control
              type="date"
              value={date}
              onChange={e => {
                setDate(e.target.value);
              }}
            />
          </Form.Group>
        </div>
        <div>
          <Form.Label>Phases:</Form.Label>
          <SelectPhase />
        </div>
        <div>
          <Form.Label>Status:</Form.Label>
          <Form.Select onChange={e => setStatus(e.target.value)}>
            <option>Passed</option>
            <option>Declined</option>
          </Form.Select>
        </div>
      </div>
      <Form.Label>Notes:</Form.Label>
      <Form.Control
        value={''}
        onChange={e => console.log(e.target.value)}
        as="textarea"
      />
    </div>
  );
};
