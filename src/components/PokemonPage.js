import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";
import { useState, useEffect } from "react";

function PokemonPage() {
  const [pokemonCollection, setPokemonCollection] = useState([]);
  const [defaultState, setDefaultState] = useState([]);
  console.log(pokemonCollection);
  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then((res) => res.json())
      .then((data) => {
        setPokemonCollection(data);
        setDefaultState(data);
      });
  }, []);

  function addPokemon(pokemonObj) {
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(pokemonObj),
    });
    setPokemonCollection([...pokemonCollection, pokemonObj]);
  }

  function rerenderDefault() {
    setPokemonCollection(defaultState);
  }

  function updateDisplayItems(inputItems) {
    const searchValues = pokemonCollection.filter((item) =>
      item.name.toLowerCase().includes(inputItems.toLowerCase())
    );
    inputItems === ""
      ? setPokemonCollection(defaultState)
      : setPokemonCollection(searchValues);
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addPokemon={addPokemon} />
      <br />
      <Search
        updateDisplayItems={updateDisplayItems}
        rerenderDefault={rerenderDefault}
      />
      <br />
      <PokemonCollection pokemon={pokemonCollection} />
    </Container>
  );
}

export default PokemonPage;
