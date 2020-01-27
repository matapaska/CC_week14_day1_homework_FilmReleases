import React, {Component} from 'react';


class ListItem extends Component{

    render(){
        return(
            <div className = "list-item">
                <h4>{this.props.children}</h4>
            </div>
        )
    }
}

export default ListItem;