import React from 'react'
import usePokemones from "../hooks/usePokemones"
import PokemonList from './PokemonList';
import {useRouter} from 'next/router'
import { useParams } from 'next/navigation';

function Card({pokemon}) {
    const router = useRouter()
    const params = useParams()
    const handleClick = (e) => {
      e.preventDefault()
      router.push("/"+pokemon.id)
    }
    return (
        <div className="container" key={pokemon.id} onClick={handleClick}>
          <div className="card">
            <div className="card-info">
              <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} className="card-img poke-img" />
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