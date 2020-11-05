import React from 'react'
import GameCard from './GameCard';

const Games = ({games}) => {
    return (
        <div className="games-section">
          <div className="gameCards">
          {games.map(game => (
                <GameCard src={game.src} key={game.title} alt={game.title}/>
            ))}
          </div>
        </div>
    )
}

export default Games
