import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Container, Segment, Grid, Image} from "semantic-ui-react";

import AlertComponent from './components/AlertComponent/AlertComponent';
import NewsFeed from './components/NewsFeed/NewsFeed';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ParentProfile from './components/ParentProfile/ParentProfile';
import './App.css';

function App() {
  const [title,updateTitle] = useState(null);
  const [errorMessage, updateErrorMessage] = useState(null);

  return (
    <Router>
    <div className="App">
      <div className="container d-flex align-items-center flex-column">
        <Switch>
          <Route  path="/" exact={true}>
            <Login showError={updateErrorMessage} updateTitle={updateTitle}></Login>
          </Route>
          <Route  path="/register">
            <Register showError={updateErrorMessage} updateTitle={updateTitle}/>
          </Route>
          <Route  path="/login">
            <Login showError={updateErrorMessage} updateTitle={updateTitle}></Login>
          </Route>
          <Route  path ="/home">
            <NewsFeed showError={updateErrorMessage} updateTitle={updateTitle}></NewsFeed>
          </Route>

          <Route path="/parentProfile">
            <ParentProfile showError={updateErrorMessage} updateTitle={updateTitle}></ParentProfile>
          </Route>
        </Switch>
        <AlertComponent errorMessage={errorMessage} hideError={updateErrorMessage}></AlertComponent>


      </div>
    </div>
    </Router>
  );
}

export default App;
