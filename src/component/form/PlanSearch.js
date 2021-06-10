import React from 'react'
import Button from './Button';
import DropDown from "../dropDown/DropDown";
import './form.css'
import {Row,Col} from 'react-bootstrap'
import {useDispatch} from 'react-redux';
import {dropDownData} from './dropdownData'
import {getPlans} from '../../actions/PlanSearchAction'
import PlanSearchResult from "./PlanSearchResult";
import {useSelector} from 'react-redux';

const PlanSearch = () => {
  const users = useSelector(state=>state.plans);
  const dispatch = useDispatch();
  const[formData, setFormData] = React.useState({
    planCode:'', planName:'', clientName:'', programName:'',
     record:'', status:''
  })


    const handleSubmit=(e)=>{
      e.preventDefault();
      console.log("submitting")
      console.log(formData)
      dispatch(getPlans(formData))
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
        <DropDown
          optionList={dropDownData}
          name="planCode"
          formData={formData}
          setFormData={setFormData}
        />

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

        <Row className="form__btn">
          <Col xs={12}>
            <Button name="Submit" type="submit" method={handleSubmit} />
            <Button name="Clear" type="reset" method={clearForm} />
          </Col>
        </Row>
      </form>
      {users.length>0&&<PlanSearchResult users={users}/>}
      </React.Fragment>
    );
}

export default PlanSearch
