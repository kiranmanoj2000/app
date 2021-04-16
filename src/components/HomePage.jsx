import React from 'react';
import PageHeading from './PageHeading'
import {HOMEPAGE_FIRST_PARAGRAPH} from '../constants/Home/index'
import Cookies from 'universal-cookie';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
const cookies = new Cookies();
class HomePage extends React.Component {
    
    

    constructor(props){
        super(props)
        this.state = {
            cookieValue: cookies.get('cookie') ? cookies.get('cookie') : ""
        }
    }

    saveCookie = () => {
        cookies.set('cookie', this.state.cookieValue, { path: '/' });
    }

  
    render() {
        return (
            <> 
                
                    <PageHeading heading='Home' description={HOMEPAGE_FIRST_PARAGRAPH}/>

        {/* <TextField id="filled-basic" value={this.state.cookieValue} onChange={(e)=>{this.setState({cookieValue: e.target.value})}} label="Value" variant="filled"/>
        <Button variant="contained" onClick={this.saveCookie} color="primary" >
            Save
        </Button> */}

                    
            </>
        )
    }
    
}


export default HomePage;