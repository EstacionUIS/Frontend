import React from 'react';

function Image({ station }) {
    return (
        <div className='p-3'>
            <img src={station.image} alt={`Station: ${station.name}`} className="img-fluid w-75" />
        </div>
    );
}

export default Image;
