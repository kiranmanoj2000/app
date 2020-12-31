import React from 'react';

import './SocialShare.css';
import {
    FacebookShareButton,
    FacebookIcon,
    EmailShareButton,
    EmailIcon,
    TwitterShareButton,
    TwitterIcon,
    LinkedinShareButton,
    LinkedinIcon,
    WhatsappShareButton,
    WhatsappIcon,
    
  } from "react-share";
class SocialShare extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <>
                <div className='socials-row'>
                    <div className='social-icon'>
                        <EmailShareButton 
                            subject="Take a look at Kiran's website"
                            children={<EmailIcon size={32} round={true}/>} 
                            url={this.props.url}
                        />
                    </div>
                    <div className='social-icon'>
                        <FacebookShareButton 
                            children={<FacebookIcon size={32} round={true}/>} 
                            url={this.props.url}
                        />
                    </div>
                    <div className='social-icon'>
                        <TwitterShareButton 
                            children={<TwitterIcon size={32} round={true}/>} 
                            url={this.props.url}
                        />
                    </div>
                    <div className='social-icon'>
                        <LinkedinShareButton 
                            children={<LinkedinIcon size={32} round={true}/>} 
                            url={this.props.url}
                        />
                    </div>
                    <div className='social-icon'>
                        <WhatsappShareButton 
                            children={<WhatsappIcon size={32} round={true}/>} 
                            url={this.props.url}
                        />
                    </div>
                </div>
            </>
        )
    }
}

export default SocialShare;