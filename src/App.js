import './App.css';
import React from 'react'
import Contact from './components/Contact'
import Projects from './components/Projects'
import HomePage from './components/HomePage';
import SocialShare from './components/SocialShare';
import NavBar from './components/NavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
  useHistory
} from "react-router-dom";

import Experience from './components/Experience'

class App extends React.Component {
  componentWillMount() {
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

  render(){
    
    return (
    <div className="App">
      <NavBar />

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

      <div className='footer'>
        <SocialShare url={this.state.url}/>
      </div>
    </div>
  );
    }
}


export default withRouter(App);
