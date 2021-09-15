import React from 'react';
import {Route} from 'react-router-dom';
import HomePage from './Components/Home/HomePage';
import AboutPage from './Components/About/AboutPage';
import Header from './Components/common/Header'

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Route exact path='/' component={HomePage} />
      <Route path='/about' component={AboutPage} />
    </div>
  );
}

export default App;
