/**
 * Add a new component, HomePage that extends React.Component.
HomePage should display the property firstName as part of its render() function using JSX
 The "App.js" file should:
Not contain the default text or styles
Import HomePage
Pass as an attribute firstName with your first name
 * 
 */

import React from 'react';

class HomePage extends React.Component {
    render(){
        return(
             <p>{this.props.firstName}</p>
        );
    }
}

export default HomePage;