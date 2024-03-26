
function PokemonCard({ pokemon }) {

    return <figure className="card">
        {pokemon.imgSrc === undefined ? <p> "???" </p> : <img src= {pokemon.imgSrc} className="card-img" alt={pokemon.name}/>}
        <figcaption> {pokemon.name} </figcaption>
    </figure>;
}

export default PokemonCard; 
