import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { ServerStatus  } from '../redux/pokemons/reducer/index'
import { getPokemonsAction, saveScrollPosition  } from '../redux/pokemons/actions/index'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  const pokemonReducer = state.pokemons
  return {
    pokemons: pokemonReducer.pokemons,
    messageFetch: pokemonReducer.messageFetch,
    nextUrl: pokemonReducer.nextUrl,
    scrollY: pokemonReducer.scrollY,
    pokemonStatus: pokemonReducer.pokemonStatus
  }
}

const mapDispatchToProps = {
  getPokemonsAction,
  saveScrollPosition
}

function PokemonPage({
  pokemons,
  pokemonStatus,
  scrollY,
  nextUrl,
  getPokemonsAction,
  saveScrollPosition
}) {
  const router = useRouter();
  const { pokemonId } = router.query;
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    if (pokemonId) {
      const actualPokemon = pokemons.find((pokemon) => pokemon.id == pokemonId)
      if (actualPokemon === undefined){
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        .then((response) => response.json())
        .then((data) => setPokemon(data))
        .catch((error) => console.error('Error fetching Pokémon data:', error));
      } else {
        setPokemon(actualPokemon)
      }
    }
  }, [pokemonId]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  const getStatWidth = (statValue, maxValue) => {
    return Math.min((statValue / maxValue) * 100, 100);
  };

  return (
    <div className="page-container">
      <button className="back-btn" onClick={() => router.back()}>
        <FontAwesomeIcon icon={faArrowLeft} size='2x' />
      </button>
      <main className="main-container main-pokemon">
        <div className="header-main-pokemon">
          <span className="number-pokemon">#{pokemon.id}</span>
          <div className="container-img-pokemon">
            <img className="poke-main-img"
              src={pokemon.sprites.other.dream_world.front_default}
              alt={pokemon.name}
            />
          </div>
          <div className="container-info-pokemon">
            <div className='main-types'>
              <h1 className="main-poke-name">{pokemon.name}</h1>
              <div className="card-types types-main">
                <span className={pokemon.types[0].type.name}>{pokemon.types[0].type.name}</span>
                {pokemon.types[1] && <span className={pokemon.types[1].type.name}>{pokemon.types[1].type.name}</span>}
              </div>
            </div>
            <div className="info-pokemon">
              <div className="group-info">
                <p>Height</p>
                <span>{pokemon.height}</span>
              </div>
              <div className="group-info">
                <p>Weight</p>
                <span>{pokemon.weight}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="container-stats">
          <h1>Stats</h1>
          <div className="stats">
            {pokemon.stats.map((stat, index) => {
              const maxStatValue = stat.stat.name === 'hp' ? 100 : 180;
              const width = getStatWidth(stat.base_stat, maxStatValue);
              return (
                <div className="stat-group" key={index}>
                  <span>{stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1)}</span>
                  <div className="progress-bar-container">
                    <div className="progress-bar" style={{ width: `${width}%` }}></div>
                  </div>
                  <span className="counter-stat">{stat.base_stat}</span>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonPage)
