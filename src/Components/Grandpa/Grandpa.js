import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css'

// context api
// 1.call createContext with a default value
// 2. set a variable of the context with uppercase
// 3. make sure you export the context to use it in other places
// 4.warp you child content using RingCOntext .provider
// 5.provide a value
// 6. To consume the context from child component
// 7.useCOntext hook and you will you need to pass the contextName
// 8. make sure you take node


export const RingContext = createContext('Diamond');

const Grandpa = () => {
    const [house, setHouse] = useState(1);

    const ornament = 'Dimond Ring';

    const handelBuyAHouse = () => {
        const newHouse = house + 1;
        setHouse(newHouse);
    }

    return (
        <RingContext.Provider value={[house, setHouse]}>
            <div>
                <h1>Grandpa</h1>
                <button onClick={handelBuyAHouse}>Buy A house</button>
                <p>House : {house}</p>
                <div className='grandpa'>
                    <Father house={house} ornament={ornament}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </div>
            </div>
        </RingContext.Provider>
    );
};

export default Grandpa;