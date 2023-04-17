import React from "react";
import { Card } from "semantic-ui-react";
import { useState } from "react";

function PokemonCard({ pokemon }) {
  const [cardImage, setCardImage] = useState(true);

  return (
    <Card>
      <div>
        <div className="image">
          <img
            onClick={(e) => setCardImage(!cardImage)}
            src={cardImage ? pokemon.sprites.front : pokemon.sprites.back}
            alt="oh no!"
          />
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
