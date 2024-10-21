import React from 'react';

function Desc({ station }) {
    return (
        <div className="card p-3 mb-3 rounded">
            <p>{station.description}</p>
        </div>
    );
}

export default Desc;
