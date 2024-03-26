const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];


function PokemonCard({index}) {

    const pokemon = pokemonList[index];
    
    return <figure className="card">
        {pokemon.imgSrc === undefined ? <p> "???" </p> : <img src= {pokemon.imgSrc} className="card-img" alt={pokemon.name}/>}
        <figcaption> {pokemon.name} </figcaption>
    </figure>;
}

export default PokemonCard; 
