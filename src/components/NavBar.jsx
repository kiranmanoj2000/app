import React from 'react';

import Contact from './Contact'
import Projects from './Projects'
import './NavBar.css'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuItem from '@material-ui/core/MenuItem';
import SocialShare from './SocialShare'
import Experience from './Experience'


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter,
    useHistory

} from "react-router-dom";
import HomePage from './HomePage';
class NavBar extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        window.addEventListener('popstate', function (event) {
            alert('hi')
        });
        
    }

    render() {
        return (

            
                <AppBar position="static">
                    <Toolbar className='navbar-contents'>
                        <div className='menu-items'>
                            <div className='menu-item'>
                                <Link style={{ textDecoration: 'none', color: 'white' }} to="/app">
                                    <MenuItem>Home</MenuItem>
                                </Link>
                            </div>

                            <div className='menu-item'>
                                <Link style={{ textDecoration: 'none', color: 'white' }} to="/app/experience">
                                    <MenuItem>Experience</MenuItem>
                                </Link>
                            </div>

                            <div className='menu-item'>
                                <Link style={{ textDecoration: 'none', color: 'white' }} to="/app/projects">
                                    <MenuItem>Projects</MenuItem>
                                </Link>
                            </div>

                            <div className='menu-item'>
                                <Link style={{ textDecoration: 'none', color: 'white' }} to="/app/contact">
                                    <MenuItem>Contact</MenuItem>
                                </Link>
                            </div>
                        </div>
                    </Toolbar>
                </AppBar>

            


        )
    }
}

export default NavBar;
