import React from 'react';
import './TShirt.css';

const TShirt = (props) => {
    const { tShirt, handelAddToCart } = props;
    const { name, picture, price } = tShirt;
    return (
        <div className='t-shirt'>
            <div>
                <img src={picture} alt="" />
                <h4>Name : {name}</h4>
                <p>Price : ${price}</p>
                <button onClick={() => handelAddToCart(tShirt)}>Add to Cart</button>
            </div>
        </div>
    );
};

export default TShirt;