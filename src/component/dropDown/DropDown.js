import React from 'react'

const DropDown = ({name, handleFormData}) => {
    
    return (
        <React.Fragment>
           <select name={name} className="formDropdown" onChange={(e)=>handleFormData(e)}>
               <option selected>--Select--</option>
               <option value="1">1</option>
               <option value="2">2</option>
               <option value="3">3</option>
            </select> 
        </React.Fragment>
    )
}

export default DropDown
