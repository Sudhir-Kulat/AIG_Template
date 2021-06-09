import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import './breadcrumb.css'

const BreadCrumb = () => {
    return (
      <Breadcrumb style={{"backgroundColor":"#001871 !important"}}>
        <Breadcrumb.Item href="#">Warranty Component Administration</Breadcrumb.Item>
        <Breadcrumb.Item href="#">
          Plan
        </Breadcrumb.Item>
        
      </Breadcrumb>
    );
}

export default BreadCrumb
