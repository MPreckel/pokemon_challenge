import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import usePokemones from "../hooks/usePokemones"


export default function PokemonPage() {
  const router = useRouter();
  const { pokemonId } = router.query;
  const [pokemon, setPokemon] = useState(null);
  const { pokemones, masPokemones } = usePokemones();
  
  console.log(pokemones, "pokemones en card")


  // console.log(pokemones.filter(p => p.id == pokemonId), "ARIEL FILTERED")
  // useEffect(() => {
  //   if (pokemonId) {
  //     fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
  //       .then((response) => response.json())
  //       .then((data) => setPokemon(data))
  //       .catch((error) => console.error('Error fetching Pokémon data:', error));
  //   }
  // }, [pokemonId]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <main className="main-container main-pokemon">
      <div className="header-main-pokemon">
        <span className="number-pokemon">#{pokemon.id}</span>
        <div className="cccontainer-img-pokemon">
          <img className="poke-main-img"
            src={pokemon.sprites.other.dream_world.front_default}
            alt={pokemon.name}
          />
        </div>
        <div className="cccontainer-info-pokemon">
          <div className='prueba'>
          <h1 className="main-poke-name">{pokemon.name}</h1>
          <div className="card-types types-main">
            <span className={pokemon.types[0].type.name}>{pokemon.types[0].type.name}</span>
            {pokemon.types[1] && <span className={pokemon.types[1].type.name}>{pokemon.types[1].type.name}</span>}
          </div>
          </div>
          <div className="info-pokemon">
            <div className="group-info">
              <p>Altura</p>
              <span>{pokemon.height}</span>
            </div>
            <div className="group-info">
              <p>Peso</p>
              <span>{pokemon.weight}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container-stats">
        <h1>Estadísticas</h1>
        <div className="stats">
          <div className="stat-group">
            <span>Hp</span>
            <div className="progress-bar"></div>
            <span className="counter-stat">{pokemon.stats[0].base_stat}</span>
          </div>
          <div className="stat-group">
            <span>Attack</span>
            <div className="progress-bar"></div>
            <span className="counter-stat">{pokemon.stats[1].base_stat}</span>
          </div>
          <div className="stat-group">
            <span>Defense</span>
            <div className="progress-bar"></div>
            <span className="counter-stat">{pokemon.stats[2].base_stat}</span>
          </div>
          <div className="stat-group">
            <span>Special Attack</span>
            <div className="progress-bar"></div>
            <span className="counter-stat">{pokemon.stats[3].base_stat}</span>
          </div>
          <div className="stat-group">
            <span>Special Defense</span>
            <div className="progress-bar"></div>
            <span className="counter-stat">{pokemon.stats[4].base_stat}</span>
          </div>
          <div className="stat-group">
            <span>Speed</span>
            <div className="progress-bar"></div>
            <span className="counter-stat">{pokemon.stats[5].base_stat}</span>
          </div>
        </div>
      </div>
    </main>
  );
}

{/* <div className="container" key={pokemon.id}>
<div className="card">
  <div className="card-info">
    <img src={pokemon.sprites.front_default} alt={pokemon.name} className="card-img poke-img" />
    <span className="poke-id">#{pokemon.id}</span>
    <div className="card-types">
      <span className={pokemon.type1}>{pokemon.type1}</span>
    </div>
  </div>
  <div>
    <p className="poke-name">{pokemon.name}</p>
  </div>
</div>

</div> */}