/**
MarketItem (a function component) should:
    Accept props
    Render a <div> containing a single <p> with the word "Item" followed by the props.count value such that each item will render "Item X" 
    where X is its current number.
    Not contain or use state of any kind
 */

import React from 'react';

function MarketItem(props) {
    return (
        <div>
            <p>Item {props.count}</p>
        </div>
    );
}

 export default MarketItem;