import React from 'react'
import {Row,Col} from 'react-bootstrap'


const DropDown = ({name,formData,setFormData,optionList}) => {
    
  const handleFormData = (e) => {
    console.log(e.target.value,e.target.name)
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const dropDownMenu = optionList.map((value) => (
    <Col md={3} className="mt-2">
    <label htmlFor={value.label}>{value.label}</label>
    <select
      name={value.name}
      className="formDropdown"
      onChange={(e) => handleFormData(e)}
      required
    >
      <option defaultValue="selected">--Select--</option>
      {value.option.map((item) => (
        <option value={item}>{item}</option>
      ))}
    </select>
    </Col>
  )); 

  return (
    <Row>
      {
        dropDownMenu
      }
    </Row>
  );
}

export default DropDown
