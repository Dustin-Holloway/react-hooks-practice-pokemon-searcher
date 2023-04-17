import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemon }) {
  const pokemonItems = pokemon.map((poke) => (
    <PokemonCard key={poke.id} pokemon={poke} />
  ));
  return <Card.Group itemsPerRow={6}>{pokemonItems}</Card.Group>;
}

export default PokemonCollection;
