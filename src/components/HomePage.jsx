import React from 'react';
import SocialShare from './SocialShare'
class HomePage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            time: 1
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                time: this.state.time + 1
            })
        }, 1000)
    }
    render() {
        return (
            <> 
                <SocialShare/>
                
            </>
        )
    }
    
}


export default HomePage;