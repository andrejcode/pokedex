import { useState, useEffect } from 'react';
import PokemonCard from './components/PokemonCard';
import Search from './components/Search';

const App = () => {
  const API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=151';

  const [pokemonList, setPokemonList] = useState([]);
  const [search, setSearch] = useState('');

  const fetchAllPokemons = async () => {
    try {
      const response = await fetch(API_URL);
      const pokemonList = await response.json();

      setPokemonList(pokemonList.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllPokemons();
  }, []);

  return (
    <div className="App">
      <Search search={search} setSearch={setSearch} />
      <div className="pokemon-list-container">
        {pokemonList
          .filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((pokemon) => (
            <PokemonCard key={pokemon.name} url={pokemon.url} />
          ))}
      </div>
    </div>
  );
};

export default App;
