import React, { useEffect, useState } from 'react';

const PokemonCard = ({ url }) => {
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(url);
        const pokemon = await response.json();
        setPokemon(pokemon);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPokemon();
  }, [url]);

  return (
    <main>
      {pokemon && (
        <div className="pokemon-card">
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <h1>
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </h1>
          <div className="types">
            {pokemon.types.map((item) => (
              <p key={item.type.name} className={`type ${item.type.name}`}>
                {item.type.name}
              </p>
            ))}
          </div>
        </div>
      )}
    </main>
  );
};

export default PokemonCard;
