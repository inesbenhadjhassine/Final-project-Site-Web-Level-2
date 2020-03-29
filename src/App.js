import React from 'react';
import './App.css';
import NavbarPage from './NavbarPage';
import Footer from './Footer';
import Confinement from './Confinement';
import Sign from './Sign';
import Homepage from './Homepage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import withFirebaseAuth from 'react-with-firebase-auth'
import 'firebase/auth';
import * as firebase from 'firebase/app';
import fire from './fire';
const firebaseAppAuth = fire.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};


function App (props) {
const {
  user,
  signOut,
  signInWithGoogle,
} = props;
  return (
<Router> 

<NavbarPage /> 
<div className="gg">

{user 
          ? <p className="hh">Hello, {user.displayName}</p>
          : <p className="hh">Please Sign in</p>
      }
      { user
          ? <button className="bb" onClick={signOut}>Sign out</button>
          : <button  className="bb" onClick={signInWithGoogle}>Sign in with Google</button>
      }
</div>   
   
  
<Switch>
<Route path='/' exact component={Homepage} />
<Route path='/Confinement' component={Confinement} />
<Route path='/Sign'  component={Sign} />
</Switch>
<Footer />

</Router>
  );
}
export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
