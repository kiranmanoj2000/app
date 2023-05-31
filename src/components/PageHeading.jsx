import React from 'react'
import Typography from '@material-ui/core/Typography';
import './PageHeading.css'
export default class PageHeading extends React.Component {
    render(){
        return(
            <>
                <Typography variant='h2'>
                    {this.props.heading}
                </Typography>
                {this.props.description && <div className='description'>
                <Typography variant='h6'>
                    {this.props.description}
                </Typography>
                </div>}
                

            </>
        )
    }
}
