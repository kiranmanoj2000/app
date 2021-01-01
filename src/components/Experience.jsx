import React from 'react'
import {EXPERIENCE_DESCRIPTION, EXPERIENCE_TITLE} from '../constants/Experience/index'
import PageHeading from './PageHeading'
class Experience extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <PageHeading heading={EXPERIENCE_TITLE} description={EXPERIENCE_DESCRIPTION}/>
        )
    }
}

export default Experience;