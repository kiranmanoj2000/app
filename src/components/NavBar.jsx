import React from 'react';

import Contact from './Contact'
import Projects from './Projects'
import './NavBar.css'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuItem from '@material-ui/core/MenuItem';
import SocialShare from './SocialShare'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    
} from "react-router-dom";
import HomePage from './HomePage';
class NavBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (

            <Router>
                <AppBar position="static">
                    <Toolbar className='navbar-contents'>
                        <div className='menu-items'>
                            <div className='menu-item'>
                                <Link style={{ textDecoration: 'none', color: 'white' }} to="/app">
                                    <MenuItem>Home</MenuItem>
                                </Link>
                            </div>

                            <div className='menu-item'>
                                <Link style={{ textDecoration: 'none', color: 'white' }} to="/app/projects">
                                    <MenuItem>Projects</MenuItem>
                                </Link>
                            </div>

                            <div className='menu-item'>
                                <Link  style={{ textDecoration: 'none', color: 'white' }} to="/app/contact">
                                    <MenuItem>Contact</MenuItem>
                                </Link>
                            </div>
                        </div>
                        
                        

                    </Toolbar>
                </AppBar>
                
                <Switch>
                <Route path="/app/projects">
                            <Projects/>
                        </Route>
                <Route path="/app/contact">
                            <Contact/>
                </Route>
                        <Route path="/app">
                            <HomePage/>
                        </Route>
          
                        
                        
                </Switch>

            <div className='footer'>
                <SocialShare/>
            </div>
            
        </Router>



        )
    }
}

export default NavBar;
