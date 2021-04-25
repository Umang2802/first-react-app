import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
 
import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';
 
import * as ROUTES from '../../constants/routes';
 
const App = () => (
  <Router>
    <div>
      <Navigation />
 
      <hr />
 
      <Route exact path={ROUTES.LANDING} Component={LandingPage} />
      <Route path={ROUTES.SIGN_UP} Component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} Component={SignInPage} />
      <Route path={ROUTES.PASSWORD_FORGET} Component={PasswordForgetPage} />
      <Route path={ROUTES.HOME} Component={HomePage} />
      <Route path={ROUTES.ACCOUNT} Component={AccountPage} />
      <Route path={ROUTES.ADMIN} Component={AdminPage} />
    </div>
  </Router>
);
 
export default App;