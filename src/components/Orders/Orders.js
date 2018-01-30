import React from 'react';
import "./Orders.css"

function Orders (props) {
    return (
        <div className="OrderTable">
            <div className="Ingred"><span className="Sal">{props.name}</span>
                <button onClick={props.less}>Less</button>
                <button onClick={props.more}>More</button>
            </div>
        </div>
    );
}

export default Orders;
