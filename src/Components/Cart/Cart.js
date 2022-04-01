import React from 'react';
import './Cart.css';

const Cart = ({ cart, handelRemoveFromCart }) => {
    // conditional rendering option
    // 1.Element variable
    // 2. ternary operator
    // 3. && short hand
    // 4.|| or operator
    let command;
    if (cart.length === 0) {
        command = <p>Please add at list one Item !!!</p>
    }
    else if (cart.length === 1) {
        command = <p>Please Add more ...</p>
    }
    else {
        command = <p>Thanks for Adding item</p>
    }
    return (
        <div>
            <h2>Item Selected : {cart.length}</h2>

            {
                cart.map(tShirt => <p>
                    {tShirt.name}
                    <button onClick={() => handelRemoveFromCart(tShirt)}>X</button>
                </p>)
            }
            {cart.length === 0 || <p className='orange'> YAY!! You are buying</p>}
            {cart.length === 3 && <div className='orange'>
                <h3>Trigonal</h3>
                <p>3 Jon k ke gift deba</p>
            </div>}
            {command}
            {cart.length !== 4 ? <p>Keep Adding</p> : <button>Remove All</button>}
            {cart.length === 4 && <button className='orange'>Review Order</button>}
        </div>
    );
};

export default Cart;