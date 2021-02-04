import React from 'react';

import './BrowserNavBar.css'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuItem from '@material-ui/core/MenuItem';



import {
    Link,
} from "react-router-dom";

class BrowserNavBar extends React.Component {
    constructor(props) {
        super(props)
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
                                <Link style={{ textDecoration: 'none', color: 'white' }} to="/files/KiranManojKumarResume.pdf" target="_blank" download>
                                    <MenuItem>Resume</MenuItem>
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

export default BrowserNavBar;
