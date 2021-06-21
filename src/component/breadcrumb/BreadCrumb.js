import React, { Component } from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import './breadcrumb.css'
import PropTypes from 'prop-types'

export class BreadCrumb extends Component {
  
  render() {
    const {heading, label} = this.props
    if(!heading){
      return null;
    }
    return (
        <Breadcrumb style={{"backgroundColor":"#001871 !important"}} data-test="breadCrumb">
        <Breadcrumb.Item href="#">{heading}</Breadcrumb.Item>
        <Breadcrumb.Item href="#">
          {label}
        </Breadcrumb.Item>
      </Breadcrumb>
    )
  }
}
BreadCrumb.propTypes={
  heading:PropTypes.string,
  label: PropTypes.string
}

export default BreadCrumb