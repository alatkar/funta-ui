import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Container, Segment, Grid, Image} from "semantic-ui-react";

import Header from './components/Header/Header';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import LoginForm from './components/LoginForm/LoginForm';
import AlertComponent from './components/AlertComponent/AlertComponent';
import NewsFeed from './components/NewsFeed/NewsFeed';
import Login from './components/Login/Login';
import './App.css';

function App() {
  const [title,updateTitle] = useState(null);
  const [errorMessage, updateErrorMessage] = useState(null);

  return (
    <Router>
    <div className="App">
      <Header title={title || "Register"}/>
      <div className="container d-flex align-items-center flex-column">
        <Switch>
          <Route path="/" exact={true}>
          <RegistrationForm showError={updateErrorMessage} updateTitle={updateTitle}/>
          </Route>
          <Route path="/register">
            <RegistrationForm showError={updateErrorMessage} updateTitle={updateTitle}/>
          </Route>
          <Route path="/login">
            {/* <LoginForm showError={updateErrorMessage} updateTitle={updateTitle}/> */}
            <Login showError={updateErrorMessage} updateTitle={updateTitle}></Login>
          </Route>
          <Route path ="/home">

            <NewsFeed showError={updateErrorMessage} updateTitle={updateTitle}></NewsFeed>

          </Route>
        </Switch>
        <AlertComponent errorMessage={errorMessage} hideError={updateErrorMessage}></AlertComponent>


      </div>
    </div>
    </Router>
  );
}

export default App;
