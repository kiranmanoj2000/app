import React from 'react'
import {PROJECTS_LIST_DESCRIPTION, PROJECTS_TITLE} from '../constants/Projects/index'
import PageHeading from './PageHeading'
class Projects extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
                <PageHeading heading={PROJECTS_TITLE} description={PROJECTS_LIST_DESCRIPTION}/>
        )
    }
}

export default Projects;