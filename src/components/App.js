import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.scss';
import BottomNavbar from './BottomNavbar';

import HomePage from './HomePage';
import SchedulePage from './SchedulePage';
import BirthdayPage from './BirthdayPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/schedulepage' exact component={SchedulePage} />
        <Route path='/BirthdayPage' exact component={BirthdayPage} />
        <Route path='/' exact component={HomePage} />
      </Router>
      <BottomNavbar />
    </div>
  );
}

export default App;
