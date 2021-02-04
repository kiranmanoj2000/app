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
import FileCopyIcon from '@material-ui/icons/FileCopy';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import copy from 'copy-to-clipboard';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import {ICON_SIZE} from "../constants/Socials/index"

class SocialShare extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showCopiedMessage: false
        }
    }

    handleClose = () => {
        this.setState({
            showCopiedMessage: false
        })
    }

    handleURLCopy = ()=>{
        if(copy(this.props.url)){
            this.setState({
                showCopiedMessage: true
            })
        }
    }

    render() {
        return (
            <div className='socials-container'>
                <div className='socials-row'>
                    <div className='social-icon'>
                    <IconButton onClick={this.handleURLCopy}>
                            <FileCopyOutlinedIcon />
                        </IconButton>
                    </div>
                    <div className='social-icon'>
                        <EmailShareButton
                            subject="Take a look at Kiran's website"
                            children={<EmailIcon size={ICON_SIZE} round={true} />}
                            url={this.props.url}
                        />
                    </div>
                    <div className='social-icon'>
                        <FacebookShareButton
                            children={<FacebookIcon size={ICON_SIZE} round={true} />}
                            url={this.props.url}
                        />
                    </div>
                    <div className='social-icon'>
                        <TwitterShareButton
                            children={<TwitterIcon size={ICON_SIZE} round={true} />}
                            url={this.props.url}
                        />
                    </div>
                    <div className='social-icon'>
                        <LinkedinShareButton
                            children={<LinkedinIcon size={ICON_SIZE} round={true} />}
                            url={this.props.url}
                        />
                    </div>
                    <div className='social-icon'>
                        <WhatsappShareButton
                            children={<WhatsappIcon size={ICON_SIZE} round={true} />}
                            url={this.props.url}
                        />
                    </div>
                
                </div>

                <div>
                    Share this page!
                </div>

                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    open={this.state.showCopiedMessage}
                    autoHideDuration={3000}
                    onClose={this.handleClose}
                    message="URL copied!"
                    action={
                        <React.Fragment>
                            <IconButton size="small" aria-label="close" color="inherit" onClick={this.handleClose}>
                                <CloseIcon fontSize="small" />
                            </IconButton>
                        </React.Fragment>
                    }
                />
            </div>
        )
    }
}

export default SocialShare;