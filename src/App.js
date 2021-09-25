import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from './Components/Home/homePage';
import AboutPage from './Components/About/aboutPage';
import Header from './Components/Common/header'
import PageNotFound from './Components/PageNotFound';
import CoursesPage from './Components/Courses/coursesPage';


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
