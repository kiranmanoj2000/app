import './App.css';
import React from 'react'
import Contact from './components/Contact'
import Projects from './components/Projects'
import HomePage from './components/HomePage';
import SocialShare from './components/SocialShare';
import BrowserNavBar from './components/BrowserNavBar';
import MobileNavBar from './components/MobileNavBar';

import {
  BrowserView,
  MobileView,
} from "react-device-detect";

import {
  Switch,
  Route,
  withRouter,
} from "react-router-dom";

import Experience from './components/Experience'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      url: window.location.href
    }
    this.unlisten = this.props.history.listen((location, action) => {
      this.setState({
        url: window.location.href
      })
    });
    
    
  }



  componentWillUnmount() {
    this.unlisten();
}

  isDev = () => {
    return (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') 
  }

  render(){
    
    return (
    <div className="App">
      {/* Mobile or not*/}
      <BrowserView>
        <BrowserNavBar />
      </BrowserView>
      
      <MobileView>
          <MobileNavBar/>
    </MobileView>
    
    <div className='content-container'>

      <Switch>
        <Route path="/app/projects">
          <Projects />
        </Route>
        <Route path="/app/experience">
          <Experience />
        </Route>
        <Route path="/app/contact">
          <Contact />
        </Route>
        <Route path="/app">
          <HomePage />
        </Route>
      </Switch>
    </div>
      

      <div className='footer'>
        <SocialShare url={this.state.url}/>
      </div>
    </div>
  );
    }
}


export default withRouter(App);
