import React, { Component, useReducer } from 'react';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import { MDBCol, MDBContainer, MDBRow} from "mdbreact";
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';
import './App.css';

class Sign extends Component {
  render() {
    return (
      <MDBContainer>
        <MDBRow>
        <MDBCol >  
      <Router basename="/react-auth-ui/">
        <div className="App" >
          <h1>Join me and don't miss any thing new</h1>
          <div className="background">
          <div className="App__Form ">
            <div className="PageSwitcher">
                <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
              </div>

              <div className="FormTitle">
                  <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
              </div>

              <Route exact path="/" component={SignUpForm}>
              </Route>
              <Route path="/sign-in" component={SignInForm}>
              </Route>
          </div>
          </div>
          </div>
      </Router>
      </MDBCol>
      </MDBRow>
      </MDBContainer>
    );
  }
}

export default Sign;