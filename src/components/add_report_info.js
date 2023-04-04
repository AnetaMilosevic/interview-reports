import { Form, InputGroup } from 'react-bootstrap';
import SelectPhase from './select';
import { useEffect, useState } from 'react';
import { reportPhases } from '../utils/constants';

export const AddReportInfo = props => {
  const [date, setDate] = useState(new Date());
  const [phase, setPhase] = useState(reportPhases[0]);
  const [status, setStatus] = useState('passed');
  const [note, setNote] = useState('');

  useEffect(() => {
    props.setReportInfoData({
      interviewDate: date,
      phase: phase,
      status: status,
      note: note,
    });
  }, [date, phase, status, note]);
  console.log(date, phase, status, note);

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
          <Form.Select onChange={e => setPhase(e.target.value)}>
            {reportPhases.map(phase => (
              <option value={phase}>{phase}</option>
            ))}
          </Form.Select>
        </div>
        <div>
          <Form.Label>Status:</Form.Label>
          <Form.Select onChange={e => setStatus(e.target.value)}>
            <option value="passed">Passed</option>
            <option value="declined">Declined</option>
          </Form.Select>
        </div>
      </div>
      <Form.Label>Notes:</Form.Label>
      <Form.Control
        value={note}
        onChange={e => setNote(e.target.value)}
        as="textarea"
      />
    </div>
  );
};
