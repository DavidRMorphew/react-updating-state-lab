// Code DigitalClicker Component Here
import React, { Component } from 'react'
class DigitalClicker extends Component {
    
    state = {
        timesClicked: 0
    }

    handleClick = (e) => {
        console.log(this.state.timesClicked)
        this.setState(prevState => ({timesClicked: prevState.timesClicked + 1}))
    }
    
    render(){
        return(   
            <div>
                <button className="button" onClick={this.handleClick}>{this.state.timesClicked}</button>
            </div>
        )
    }
}
export default DigitalClicker