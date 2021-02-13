/*
Market (a class component) should:
    Keep an internal state (object)
    Use an internal property of its state (object) called items (array)
    Import MarketItem
    Allow a user to click a button (using the onClick event). It should:
    Add a new MarketItem component to the state.items.
    When adding a new MarketItem component, pass it the current number of entries in state.items as attributes named count and key
    Show a listing of all current entries in state.items using the map() (Links to an external site.) method of Array (Links to an external site.), 
    returning the current element in the Array.
*/

import React from 'react';
import MarketItem from '../MarketItem';

class Market extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            items: []
        };
    }
    render(){
        return(
            <div>
                <p>Click to add items</p>

                <button onClick = {()=> {
                    const items = this.state.items;
                    items.push(<MarketItem count = {items.length}/>);
                    this.setState({items: items});
                }}>Click here</button>

                <div>
                    {this.state.items.map((count, key) => {
                         return <p key = {key}>{count}</p>
                    })}
                </div>
            </div>
        )
    }
}

export default Market;