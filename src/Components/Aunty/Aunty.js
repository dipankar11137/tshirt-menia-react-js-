import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Aunty = () => {
    const [house, setHouse] = useContext(RingContext);


    return (
        <div>
            <h4>Aunty</h4>
            <p>House add : {house}</p>
            <button onClick={() => setHouse(house + 1)}>Buy a house</button>

        </div>
    );
};

export default Aunty;