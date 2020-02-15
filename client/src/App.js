import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Navbar from './components/layout/navbar/Navbar';
import Backdrop from './components/Backdrop/Backdrop';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Footer from './components/layout/footer/Footer';

//Route Imports
import Home from './components/layout/home/Home';
import Fullstack from './components/layout/fullstack/Fullstack';
import Resume from './components/layout/resume/Resume';

function App() {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  let backdrop;

  useEffect(() => {
    //sideDrawerOpen ? alert('true') : alert('false');
  }, [sideDrawerOpen]);

  const toggleDrawerClickHandler = () => {
    setSideDrawerOpen(true);
  };

  const backdropClickHandler = () => {
    setSideDrawerOpen(false);
  };

  if (sideDrawerOpen) {
    backdrop = <Backdrop click={backdropClickHandler} />;
  }
  return (
    <Router>
      <Fragment>
        <SideDrawer show={sideDrawerOpen} click={backdropClickHandler} />
        {backdrop}
        <Navbar click={toggleDrawerClickHandler} />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/fullstack' component={Fullstack} />
          <Route path='/resume' component={Resume} />
        </Switch>
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
