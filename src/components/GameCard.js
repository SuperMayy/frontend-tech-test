import React from 'react';

const GameCard = ({src, alt}) => {
    return (
        <div>
            <img src={src} alt={alt} key={alt} className="gameCard"/>
        </div>
    )
}

export default GameCard
