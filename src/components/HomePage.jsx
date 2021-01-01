import React from 'react';
import PageHeading from './PageHeading'
import {HOMEPAGE_FIRST_PARAGRAPH} from '../constants/Home/index'
class HomePage extends React.Component {
    constructor(props){
        super(props)
        
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