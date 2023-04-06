import { Form } from 'react-bootstrap';
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

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
      }}>
      <div style={{ display: 'flex', flex: 1 }}>
        <div style={{ display: 'flex', flex: 1 }}>
          <Form.Group controlId="dob">
            <Form.Label>Interview Date:</Form.Label>
            <Form.Control
              type="date"
              value={date}
              onChange={e => {
                if (new Date(e.target.value) > new Date()) {
                  alert('Invalid date');
                } else {
                  setDate(e.target.value);
                }
              }}
            />
          </Form.Group>
        </div>
        <div style={{ display: 'flex', flex: 1 }}>
          <div style={{ width: '90%' }}>
            <Form.Label>Phases:</Form.Label>
            <Form.Select onChange={e => setPhase(e.target.value)}>
              {reportPhases.map((phase, i) => (
                <option key={i} value={phase}>
                  {phase}
                </option>
              ))}
            </Form.Select>
          </div>
        </div>
        <div style={{ display: 'flex', flex: 1, marginBottom: 20 }}>
          <div style={{ width: '100%' }}>
            <Form.Label>Status:</Form.Label>
            <Form.Select onChange={e => setStatus(e.target.value)}>
              <option value="passed">Passed</option>
              <option value="declined">Declined</option>
            </Form.Select>
          </div>
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
