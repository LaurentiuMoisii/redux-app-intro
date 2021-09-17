import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from './Components/Home/HomePage';
import AboutPage from './Components/About/AboutPage';
import Header from './Components/common/Header'
import PageNotFound from './Components/PageNotFound';
import CoursesPage from './Components/courses/CoursesPage';


function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/courses' component={CoursesPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
