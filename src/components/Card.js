import React from 'react'
import usePokemones from "../hooks/usePokemones"
import PokemonList from './PokemonList';

function Card({pokemon}) {
    return (
        <div className="container" key={pokemon.id}>
          <div className="card">
            <div className="card-info">
              <img src={pokemon.img} alt={pokemon.name} className="card-img poke-img" />
              <span className="poke-id">#{pokemon.id}</span>
              <div className="card-types">
                <span className={pokemon.type1}>{pokemon.type1}</span>
              </div>
            </div>
            <div>
              <p className="poke-name">{pokemon.name}</p>
            </div>
          </div>
          
        </div>
      );
}

export default Card