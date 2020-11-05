import React from 'react';

function Description({description}) {
    return (
        <div className="description">
            <p>{description}</p>
            <h1 className="subheader games">Include Games</h1>
        </div>
    )
}

export default Description;
