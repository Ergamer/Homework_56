import React from 'react';
import "./Foods.css"
import Butt from "../Butt/Butt"


function Foods (props) {
    let array = [];
        {props.fillings.map((but, index) => {
            for(let k = 0; k < but.amount; k++) {
                array.push(<Butt classList={but.type}/>);
            }
             return array;
        })}

    return (
        <div className="Burger">
            <div className="BreadTop">
                <div className="Seeds1"></div>
                <div className="Seeds2"></div>
            </div>
            {array}
            <div className="BreadBottom"></div>
        </div>
    );
}

export default Foods;