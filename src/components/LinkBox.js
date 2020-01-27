import React, {Component} from 'react';

class LinkBox extends Component{


    render(){
        return(
            <div className = "link-box">
                <button><a href = {this.props.link.url}>View upcoming film releases >></a></button>
            </div>
        )

    }
}

export default LinkBox;