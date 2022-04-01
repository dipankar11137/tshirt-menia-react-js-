import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Speacial = ({ ornament }) => {
    const [house, setHouse] = useContext(RingContext);
    return (
        <div>
            <h1>Speacial</h1>
            <h2>House : {house}</h2>
            <button onClick={() => setHouse(house + 1)}>Buy a house</button>
        </div>
    );
};

export default Speacial;