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
                    
        

                    
            </>
        )
    }
    
}


export default HomePage;