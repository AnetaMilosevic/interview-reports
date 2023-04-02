import Form from 'react-bootstrap/Form';
import { reportPhases } from '../utils/constants';



function SelectPhase() {


  return (
    <Form.Select aria-label="Default select example">
        {reportPhases.map((phase, i)=><option value={i}>{phase}</option>) }
     
    </Form.Select>
  );
}

export default SelectPhase;