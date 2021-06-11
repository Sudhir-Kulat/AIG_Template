import React from 'react'
import {Row} from 'react-bootstrap'


const DropDown = ({name,formData,setFormData,optionList}) => {
    
  const handleFormData = (e) => {
    console.log(e.target.value,e.target.name)
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const dropDownMenu = <select
      name={name}
      className="formDropdown"
      onChange={(e) => handleFormData(e)}
      required
    >
      <option defaultValue="selected">--Select--</option>
        {optionList.map((item,index) => (
        <option value={item}>{item}</option>
      ))}
    </select>

  return (
    <Row>
      {
        dropDownMenu
      }
    </Row>
  );
}

export default DropDown
