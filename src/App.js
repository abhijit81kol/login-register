import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


import './App.css';
import Login from './Login/Login';
import Register from './Register/Register';
import Setting from './Setting/Setting';
import Home from './Home/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/Register" component={Register} />
          <Route path="/Setting" component={Setting} />
          <Route path="/Home" component={Home} />
          <Route path="/" component={Login} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
