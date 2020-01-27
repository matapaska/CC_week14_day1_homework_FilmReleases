import React, {Component} from 'react';
import ListItem from './ListItem'

class FilmList extends Component{

    render(){
        const filmNodes = this.props.data.map(listItem =>{
            return(
                <ListItem key={listItem.id}>
                    <ul>
                        <li><a href={listItem.url}>{listItem.name}</a></li>
                    </ul>
                    
                </ListItem>
            )
        })

        return (
            <div className = "film-list">
                {filmNodes}
                
            </div>
        )
    }

}

export default FilmList;

{/* <a href="https://www.w3schools.com">Visit W3Schools.com!</a> */}
// const commentNodes = this.props.data.map(comment =>{
//     return (
//     <Comment author={comment.author} key={comment.id}>
//         {comment.text}
//     </Comment>
//     )