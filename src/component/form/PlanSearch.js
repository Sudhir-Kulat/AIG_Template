import React from 'react'
import Button from './Button';
import DropDown from "../dropDown/DropDown";
import './form.css'
import {Row,Col} from 'react-bootstrap'
import {dropDownData} from './dropdownData'
import {useDispatch} from 'react-redux';
import {createUser} from '../../actions/PlanSearchAction'


const PlanSearch = () => {
  const[formData, setFormData] = React.useState({
    name:'', email:'', gender:'', status:''
  })
  const dispatch = useDispatch();
    const handleSubmit=(e)=>{
      e.preventDefault();
      console.log("submitting", formData)
      dispatch(createUser(formData))
    }
    const clearForm=(e)=>{
        setFormData({
          name:'', email:'', gender:'', status:''
        })
    }
    return (
      <React.Fragment>
        <form className="planSearch">
          <Row className="m-0">
          <Col md={3} className="p-0 mt-2">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </Col>
            <Col md={3} className="p-0 mt-2">
              <label htmlFor="email">Email </label>
              <input
                type="email"
                name="email"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </Col>
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
