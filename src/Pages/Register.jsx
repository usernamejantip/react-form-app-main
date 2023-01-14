import React, {useState} from 'react'
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { useNavigate } from 'react-router-dom'

const Register = () => {
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
    navigate("/preview", { state: { formData } });
  };
  return (
    <div>
      <Container>
        <h1>Register</h1>
        <hr />
      <Form onSubmit={submitForm}>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input 
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
          required
          onChange={handleChange}
          />
        <FormGroup>
          <Label for="email">Email</Label>
          <Input 
          type="email"
          name="email"
          id="email"
          placeholder="xxx@mmm.com"
          required
          onChange={handleChange}
          />
        </FormGroup> 
        <FormGroup>
          <Label for="password">Password</Label>
          <Input 
          type="password"
          name="password"
          id="password"
          placeholder="Mainimum 8 characters"
          required
          onChange={handleChange}
          />
        </FormGroup> 
        </FormGroup>
        <Button color="primary">Sign Up</Button>
      </Form>
      </Container>
    </div>
  )
}

export default Register