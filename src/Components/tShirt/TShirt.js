import React from 'react';
import './TShirt.css';

const TShirt = (props) => {
    const { name, picture, price } = props.tShirt;
    return (
        <div className='t-shirt'>
            <div>
                <img src={picture} alt="" />
                <h4>Name : {name}</h4>
                <p>Price : ${price}</p>
                <button>Add to Cart</button>
            </div>
        </div>
    );
};

export default TShirt;