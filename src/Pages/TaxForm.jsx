import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap'

const Taxform = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({});
    const handleChange = (event) => {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    };
  
    const submitForm = (event) => {
      event.preventDefault();
      // submit formData to a server
      navigate("/result", { state: { formData } });
    };

  return (
    <div>
    <Container>
      <h1>Taxform</h1>
      <hr />
    <Form onSubmit={submitForm}>
    <FormGroup>
          <Label for="salary">เงินเดือน</Label>
          <Input 
          type="number"
          name="salary"
          id="salary"
          placeholder="ใส่เงินเดือนที่ได้รับ"
          required
          onChange={handleChange}
          />
    </FormGroup> 
    <FormGroup>
          <Label for="bonus">โบนัส</Label>
          <Input 
          type="number"
          name="bonus"
          id="bonus"
          placeholder="ใส่โบนัสที่ได้รับ"  
          required
          onChange={handleChange}
          />
    </FormGroup>
      <Button color="primary">Next</Button>
    </Form>
    </Container>
  </div>
  )
}

export default Taxform