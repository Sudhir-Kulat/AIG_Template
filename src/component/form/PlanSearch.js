import React from 'react'
import Button from './Button';
import DropDown from "../dropDown/DropDown";
import './form.css'
import {Row,Col} from 'react-bootstrap'
import {dropDownData} from './dropdownData'


const PlanSearch = () => {
  const[formData, setFormData] = React.useState({
    planCode:'', planName:'', clientName:'', programName:'',
     record:'', status:''
  })


    const handleSubmit=(e)=>{
      e.preventDefault();
      console.log("submitting")
      console.log(formData)
    }
    const clearForm=(e)=>{
        setFormData({
          planCode:'', planName:'', clientName:'', programName:'',
           record:'', status:''
        })
    }
    return (
      <React.Fragment>
        <form className="planSearch">
          <Row className="m-0">
            {dropDownData.map((dropDown) => (
              <Col md={3} className="mb-4">
                <label htmlFor={dropDown.name}>{dropDown.label}</label>
                <DropDown
                  optionList={dropDown.option}
                  name={dropDown.name}
                  formData={formData}
                  setFormData={setFormData}
                />
              </Col>
            ))}
            <Col md={3} className="p-0 mt-2">
              <label htmlFor="clientName">Client Name</label>
              <input
                type="text"
                name="clientName"
                onChange={(e) =>
                  setFormData({ ...formData, clientName: e.target.value })
                }
              />
            </Col>
          </Row>

          <Row className="form__btn">
            <Col xs={12}>
              <Button name="Submit" type="submit" method={handleSubmit} />
              <Button name="Clear" type="reset" method={clearForm} />
            </Col>
          </Row>
        </form>
      </React.Fragment>
    );
}

export default PlanSearch
