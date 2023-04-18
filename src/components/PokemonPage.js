import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";
import { useState, useEffect } from "react";

function PokemonPage() {
  const [defaultCollection, setDefaultCollection] = useState([]);
  const [pokemonCollection, setPokemonCollection] = useState([]);
  // const [inputItems, setInputItems] = useState();

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then((res) => res.json())
      .then((data) => {
        setPokemonCollection(data);
        setDefaultCollection(data);
      });
  }, []);

  function addPokemon(pokemonObj) {
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(pokemonObj),
    })
      .then((res) => res.json())
      .then((data) => setPokemonCollection([...pokemonCollection, data]));
  }

  function handleChange(e) {
    setPokemonCollection(defaultCollection);
    const value = e.target.value;
    updateDisplayItems(value);
  }

  function updateDisplayItems(value) {
    if (value === "") {
      setPokemonCollection([...defaultCollection]);
    } else if (value.length < pokemonCollection.length) {
      setPokemonCollection(
        defaultCollection.filter((item) =>
          item.name.toLowerCase().includes(value.toLowerCase())
        )
      );
    } else {
      setPokemonCollection(
        defaultCollection.filter((item) =>
          item.name.toLowerCase().includes(value.toLowerCase())
        )
      );
    }
  }
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addPokemon={addPokemon} />
      <br />
      <Search
        updateDisplayItems={updateDisplayItems}
        handleChange={handleChange}
      />
      <br />
      <PokemonCollection pokemon={pokemonCollection} />
    </Container>
  );
}

export default PokemonPage;
