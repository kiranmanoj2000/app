import { render } from '@testing-library/react';
import React from 'react';

class HomePage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            time: 1
        }
    }

    componentDidMount(){
        let self = this
        setInterval(()=>{
            this.setState({
                time: this.state.time + 1
            })
        }, 1000)
    }
    render() {
        return (
            <> 
                <b>{this.state.time} seconds </b>
            </>
        )
    }
    
}


export default HomePage;