import React from "react";
import { Form } from "semantic-ui-react";
import { useState } from "react";

function PokemonForm({ addPokemon }) {
  const pokemonObj = {
    hp: "",
    name: "",
    sprites: { front: " ", back: " " },
  };
  const [newPokemon, setNewPokemon] = useState(pokemonObj);

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          addPokemon(pokemonObj);
        }}
      >
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Name"
            placeholder="Name"
            name={pokemonObj.name}
            onChange={(e) => (pokemonObj.name = e.target.value)}
          />
          <Form.Input
            fluid
            label="hp"
            placeholder="hp"
            name={pokemonObj.hp}
            onChange={(e) => (pokemonObj.hp = e.target.value)}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name={pokemonObj.sprites.front}
            onChange={(e) => (pokemonObj.sprites.front = e.target.value)}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name={pokemonObj.sprites.back}
            onChange={(e) => (pokemonObj.sprites.back = e.target.value)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
