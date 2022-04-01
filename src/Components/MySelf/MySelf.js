import React from 'react';
import Speacial from '../Speacial/Speacial';

const MySelf = ({ house, ornament }) => {

    return (
        <div>
            <h4>Me</h4>
            <p>House : {house}</p>
            <Speacial ornament={ornament}></Speacial>

        </div>
    );
};

export default MySelf;