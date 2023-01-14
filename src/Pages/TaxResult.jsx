import React from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from 'reactstrap';

const TaxResult = (props) => {
  const location = useLocation();
  const navigate= useNavigate();
  const { formData } = location.state;
  //alert(formData.name + formData.email + formData.password);

    let totalIncome = parseInt(formData.salary)*12 + parseInt(formData.bonus);
    let salary = (formData.salary*12);
    let expenses = (totalIncome *50/100) > 100000 ? 100000 : (totalIncome *50/100);//ค่าใช้จ่าย
    let netIncome = totalIncome - expenses - 60000//เงินได้พึงประเมิน
    let percentage = 0;//อัตราภาษี 
    if (netIncome <= 150000) {
        percentage = "0%";
    } else if (netIncome > 150000 && netIncome < 300001) {
        percentage = "5%";
        netIncome += netIncome * 0.05;
    } else {
        percentage = "10%";
        netIncome += netIncome * 0.1;
    }
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col">
          <h1>TaxResult Data</h1>
          <hr />
          <p>
            <strong>รายได้ทั้งปี : { salary }</strong>
          </p>
          <p>
            <strong>โบนัส : { formData.bonus }</strong>
          </p>
          <p>
            <strong>เงินได้ทั้งปี : { totalIncome }</strong>
          </p>
          <p>
            <strong>ค่าใช้จ่าย : {expenses.toLocaleString('th-TH', { style: 'currency', currency: 'THB' })}</strong>
          </p>
          <p>
            <strong>ค่าลดหย่อน : ฿60,000.00</strong>
          </p>
          <p>
            <strong>เงินได้พึงประเมิน : {netIncome.toLocaleString('th-TH', { style: 'currency', currency: 'THB' })}</strong>
          </p>
          <p>
            <strong>ภาษีที่ต้องชำระ : {netIncome <= 150000 ? "ยกเว้นภาษี" 
            :(netIncome > 150000 && netIncome < 300001 ? (netIncome * 0.05).toLocaleString('th-TH', { style: 'currency', currency: 'THB' })
            :(netIncome > 300001 ? (netIncome * 0.1).toLocaleString('th-TH', { style: 'currency', currency: 'THB' }):netIncome.toLocaleString('th-TH', { style: 'currency', currency: 'THB' })))}</strong>
          </p>
          <p>
            <strong>อัตราภาษี : {percentage}</strong>
          </p>
          <p>
            <Button color="warning" onClick={() => navigate(-1)}>
              Edit
            </Button>{" "}
            &nbsp;
            <Button color="success" onClick={() => navigate("/success")}>
              Save
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TaxResult ;