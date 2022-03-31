import React from 'react';
import useTShirt from '../../Hooks/useTShirt';
import Cart from '../Cart/Cart';
import TShirt from '../tShirt/TShirt';
import './Home.css'

const Home = () => {
    const [tShirts, setTShirt] = useTShirt();
    return (
        <div className='home-container'>
            <div className="tshirt-container">
                {
                    tShirts.map(tShirt => <TShirt key={tShirt._id} tShirt={tShirt}></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;