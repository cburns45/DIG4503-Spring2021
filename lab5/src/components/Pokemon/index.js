/**
Create a component called Pokemon
Should not have state
Should show at least the image (sprites.front_default), name, and id of a Pokemon
 */

 import React from 'react';
 

class Pokemon extends React.Component{
    constructor(props){
        super(props);
    };

    render(){
        return(
            
            <div>
                <h2>{this.props.name}</h2>
                <p>{this.props.id}</p>
                <img src = {this.props.sprites} />
            </div>
                  
             
        );
    }
     
}

 export default Pokemon;