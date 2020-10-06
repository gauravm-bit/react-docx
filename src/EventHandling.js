import React from 'react';


class EventHandling extends React.Component{
    handleClick = (event) => {
        event.preventDefault();
        console.log("Link was clicked");
    }
    

    render(){
       
        return<div > 
            <a href="#" onClick={this.handleClick}> Click Me </a>
        </div>
    }
}

export default EventHandling;