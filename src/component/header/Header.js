import React from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import {NavData} from './Menu_Item';
import Logo from '../../assets/logo.png'
import './header.css'
const Header = () => {
    return (
      <div data-test="header">
        <Navbar bg="light" expand="lg" className="pb-0">
          <Navbar.Brand href="#"><img  data-test="logo" src={Logo} alt="logo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="mt-3">
            <Nav
              className="ml-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
            {NavData.map(data =>(
              !data.hasOwnProperty('list') ? (<Nav.Link href="#" key={data.id} className="active">{data.name}</Nav.Link>): 
              (<NavDropdown data-test="header__dropDown" title={data.name} id="navbarScrollingDropdown" key={data.id}>
                {data.list.map( (item,index)=>(
                  <NavDropdown.Item href="#" key={index}>{item}</NavDropdown.Item>    
                ))}
              </NavDropdown>)
            ))}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
}

export default Header
