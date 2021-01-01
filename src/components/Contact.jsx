import React from 'react'
import {CONTACT_DESCRIPTION, CONTACT_TITLE} from '../constants/Contact/index'
import PageHeading from './PageHeading'
class Contact extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <PageHeading heading={CONTACT_TITLE} description={CONTACT_DESCRIPTION}/>
        )
    }
}

export default Contact;