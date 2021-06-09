import React from 'react'
import Button from './Button';
import DropDown from "../dropDown/DropDown";
import './form.css'
import {Row,Col} from 'react-bootstrap'
import {useDispatch} from 'react-redux';
import {getPlans} from '../../actions/PlanSearcghAction'



const PlanSearch = () => {

  const dispatch = useDispatch();
  const[formData, setFormData] = React.useState({
    planCode:'', planName:'', clientName:'', programName:'',
     record:'', status:''
  })

  const handleFormData=(e)=>{
    console.log(e.target.name,e.target.value)
    setFormData({...formData, [e.target.name]:e.target.value})
  }

    const handleSubmit=(e)=>{
      e.preventDefault();
      dispatch(getPlans(formData))
    }
    const clearForm=(e)=>{
        setFormData({
          planCode:'', planName:'', clientName:'', programName:'',
           record:'', status:''
        })
    }
    return (
      <form className="planSearch">
        <Row>
          <Col md={3}>
            <label htmlFor="planCode">Plan Code</label>
            <DropDown name="planCode" handleFormData={handleFormData} />
          </Col>
          <Col md={3}>
            <label htmlFor="planName">Plan Name</label>
            <DropDown  name="planName" handleFormData={handleFormData}/>
          </Col>
          <Col md={3}>
            <label htmlFor="clientName">Client Name</label>
            <input type="text"  name="clientName" onChange={(e)=>setFormData({...formData,clientName:e.target.value })}/>
          </Col>
          <Col md={3}>
            <label htmlFor="programName">Program Name</label>
            <DropDown   name="programName" handleFormData={handleFormData}/>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={3}>
            <label htmlFor="record">Record</label>
            <DropDown   name="record" handleFormData={handleFormData}/>
          </Col>
          <Col md={3}>
            <label htmlFor="status">Status</label>
            <DropDown  name="status" handleFormData={handleFormData} />
          </Col>
        </Row>
        <Row className="form__btn">
          <Col xs={12} >
            <Button name="Submit" type="submit" method={handleSubmit}/>
            <Button name="Clear" type="reset" method={clearForm} />
          </Col>
        </Row>
      </form>
    );
}

export default PlanSearch
