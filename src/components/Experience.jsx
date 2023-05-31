import React from 'react'
import {EXPERIENCE_DESCRIPTION, EXPERIENCE_TITLE} from '../constants/Experience/index'
import PageHeading from './PageHeading'
import ExperienceCard from './ExperienceCard'

import NSLogo from "../assets/images/Oracle_NetSuite_2021.png"
import MioLogo from "../assets/images/miovision-technologies-inc-_logo_201806041618418.png"
import Exponet from "../assets/images/exponet.jpeg"
import rcaf from "../assets/images/Royal_Canadian_Air_Force_Badge.svg.png"
import rombald from "../assets/images/Rombald+Logo.png"

import './Experience.css'

class Experience extends React.Component {

    render(){
        return(
            <>
            
            <PageHeading heading={EXPERIENCE_TITLE} />
            <div className={'experience-row'}>
                <ExperienceCard
                            logo={NSLogo}
                            name={"Oracle"}
                            jobTitle={"Software Developer Intern"}
                            jobDesc={""}
                            languages={"Java, TypeScript, SQL"}
                            technologies={"React, Redux, Oracle"}
                />
                <ExperienceCard
                        logo={MioLogo}
                        name={"Miovision"}
                        jobTitle={"Software Developer Intern"}
                        jobDesc={""}
                        languages={"Ruby, SQL"}
                        technologies={"Ruby on Rails, PostgreSQL, Docker"}
                />
                <ExperienceCard
                        logo={Exponet}
                        name={"Exponet Canada"}
                        jobTitle={"Software Developer Intern"}
                        jobDesc={""}
                        languages={"JavaScript. Groovy, Dart, NoSQL"}
                        technologies={"React, Redux, Flutter, MongoDB"}
            />
            <ExperienceCard
                        logo={rcaf}
                        name={"Canadian Air Force"}
                        jobTitle={"Backend Software Developer Intern"}
                        logoSize={""}
                        jobDesc={""}
                        languages={"Ruby, Python, SQL"}
                        technologies={"Ruby on Rails, Django, PostgreSQL, Docker"}
            />
            <ExperienceCard
                        logo={rombald}
                        name={"Rombald"}
                        jobTitle={"Software/Reports Developer Intern"}
                        logoSize={""}
                        jobDesc={""}
                        languages={"C#, JavaScript, SQL"}
                        technologies={"ASP.NET, Node, Express, React, SQL Server, MongoDB"}
            />
            </div>
            
            </>
        )
    }
}

export default Experience;