
import React, { Component } from 'react'
class YouTubeDebugger extends Component {

    state = {
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p'
          }
        }
      }

    //   handleClick = (e) => {
    //       console.log(e.target.className)
    //       if (e.target.className === "bitrate"){
    //         this.setState({settings: {...this.state.settings, bitrate: 12}})
    //       } else if (e.target.className === "resolution"){
    //         this.setState({settings: {...this.state.settings, video: {resolution: '720p'}}})
    //         console.log(this.state.settings.video.resolution)
    //       }
    //   }
    handleBitrateClick = () => {
        this.setState({settings: {...this.state.settings, bitrate: 12}})
    }
    handleResolutionClick = () => {
        this.setState({settings: {...this.state.settings, video: {resolution: '720p'}}})
    }

    render(){
        return(   
            <div>
                <button className="bitrate" onClick={this.handleBitrateClick}>Bitrate</button>
                <button className="resolution" onClick={this.handleResolutionClick}>Resolution</button>
            </div>
        )
    }
}
export default YouTubeDebugger