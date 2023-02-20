import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const PokemonCard = ({ url }) => {
  const [pokemon, setPokemon] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

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
    <main onClick={toggleModal}>
      {pokemon && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={toggleModal}
          contentLabel="Pokemon Details"
          className="modal"
          overlayClassName="overlay"
        >
          <h1>
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </h1>
          <div>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <div>
              <p>Height: {pokemon.height * 10} cm</p>
              <p>Weight: {pokemon.weight / 10} kg</p>
              <div>
                <p>Type:</p>
                <div className="modal-types">
                  {pokemon.types.map((item) => (
                    <p
                      key={item.type.name}
                      className={`type ${item.type.name}`}
                    >
                      {item.type.name}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}

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
