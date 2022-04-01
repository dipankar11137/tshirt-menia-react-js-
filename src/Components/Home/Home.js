import React, { useState } from 'react';
import useTShirt from '../../Hooks/useTShirt';
import Cart from '../Cart/Cart';
import TShirt from '../tShirt/TShirt';
import './Home.css'

const Home = () => {
    const [tShirts, setTShirt] = useTShirt();
    const [cart, setCart] = useState([]);

    const handelAddToCart = (selectedItem) => {
        const exists = cart.find(tShirt => tShirt._id === selectedItem._id);
        if (!exists) {
            const newCart = [...cart, selectedItem];
            setCart(newCart);
        }
        else {
            alert('Item alredy added');
        }

    }
    const handelRemoveFromCart = (selectedItem) => {
        const rest = cart.filter(tShirt => tShirt._id !== selectedItem._id);
        setCart(rest)
    }
    return (
        <div className='home-container'>

            <div className="tshirt-container">
                {
                    tShirts.map(tShirt => <TShirt
                        key={tShirt._id}
                        tShirt={tShirt}
                        handelAddToCart={handelAddToCart}
                    ></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}
                    handelRemoveFromCart={handelRemoveFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;