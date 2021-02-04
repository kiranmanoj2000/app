import React from 'react'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './MobileNavBar.css'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import ContactsIcon from '@material-ui/icons/Contacts';
import BuildIcon from '@material-ui/icons/Build';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import {
    Link,
} from "react-router-dom";
class MobileNavBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mobileNavBarOpen: false
        }
    }

    handleDrawerClose = () => {
        this.setState({
            mobileNavBarOpen: false
        })
    }

    mobileMenuItems = () => {
        return (
            <>
                <ListItem onClick={this.handleDrawerClose} button key='Home'>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary={<Link style={{ textDecoration: 'none', color: 'black' }} to="/app">Home</Link>}
                    />
                </ListItem>

                <ListItem onClick={this.handleDrawerClose} button key='Experience'>
                    <ListItemIcon>
                        <BuildIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary={<Link style={{ textDecoration: 'none', color: 'black' }} to="/app/experience">Experience</Link>}
                    />
                </ListItem>

                <ListItem onClick={this.handleDrawerClose} button key='Projects'>
                    <ListItemIcon>
                        <EmojiObjectsIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary={<Link style={{ textDecoration: 'none', color: 'black' }} to="/app/projects">Projects</Link>}
                    />
                </ListItem>
                

                <ListItem onClick={this.handleDrawerClose} button key='Resume'>
                    <ListItemIcon>
                        <InsertDriveFileIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary={<a style={{ textDecoration: 'none', color: 'black' }} href="files/KiranManojKumarResume.pdf" download>Resume</a>}
                    />
                </ListItem>

                <ListItem onClick={this.handleDrawerClose} button key='Contact'>
                    <ListItemIcon>
                        <ContactSupportIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary={<Link style={{ textDecoration: 'none', color: 'black' }} to="/app/contact">Contact</Link>}
                    />
                </ListItem>

            </>
        )
    }

    render() {
        return (
            <>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton onClick={() => { this.setState({ mobileNavBarOpen: true }) }} edge="start" color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <SwipeableDrawer
                    anchor={'left'}
                    open={this.state.mobileNavBarOpen}
                    onClose={() => { this.setState({ mobileNavBarOpen: false }) }}
                    onOpen={() => { this.setState({ mobileNavBarOpen: true }) }}
                >
                    <div>
                        {this.mobileMenuItems()}
                    </div>
                </SwipeableDrawer>
            </>
        )
    }
}

export default MobileNavBar;