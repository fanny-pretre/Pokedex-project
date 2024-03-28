import React, { useState } from 'react';

function NavBar({pokemonList, handlePokemonClick}) {
    const handlePikachuClick = (pokemon) => {
        if (pokemon.name === "pikachu") {
          alert("pika pikachu !!!");
        }
        handlePokemonClick(pokemon);
      };
    
    return <div className="navbar">
{pokemonList.map((pokemon, index) => (
    <button 
    key={index} 
    onClick={() => handlePikachuClick(pokemon)}>
    {pokemon.name}
  </button>
))}
    </div>;
}

export default NavBar;