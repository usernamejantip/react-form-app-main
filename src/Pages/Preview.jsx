import React from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from 'reactstrap';

const Preview = (props) => {
  const location = useLocation();
  const navigate= useNavigate();
  const { formData } = location.state;
  //alert(formData.name + formData.email + formData.password);

  let maskedPassword ="*".repeat(formData.password.length)
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col">
          <h1>Preview Data</h1>
          <hr />
          <p>
            <strong>Name: {formData.name}</strong>
          </p>
          <p>
            <strong>E-mail: {formData.email}</strong>
          </p>
          <p>
            <strong>Password: {maskedPassword} </strong>
          </p>
          <p>
            <Button color="warning" onClick={() => navigate(-1)}>
              Edit
            </Button>{" "}
            &nbsp;
            <Button color="success" onClick={() => navigate("/tax")}>
              Next
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Preview