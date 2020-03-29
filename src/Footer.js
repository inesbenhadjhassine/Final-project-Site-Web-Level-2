
import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import {Link} from 'react-router-dom';
import './App.css';

const Footer = () => {
  return (
    <MDBFooter  className="font-small pt-4 mt-4 ttcol">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">MY COOKBOOK</h5>
            <p>
              Hello everybody
            </p>
          </MDBCol>
          <MDBCol md="6">
            <ul>
              <Link to="/" style={linkstyle}>
        <li className="list-unstyled">HOME</li>
              </Link>
              <Link to="/Confinement" style={linkstyle}>
        <li className="list-unstyled">MY RECIPES DURINGS CONFINEMENT</li>
      </Link>
      <Link to="/Sign" style={linkstyle}>
        <li className="list-unstyled">SIGN IN or SIGN UP</li>
      </Link>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}
const linkstyle = {
  color : 'Aqua',
  textDecoration: 'none'
  };

export default Footer;