import Head from "next/head";
import Image from "next/image";
import { useParams } from 'next/navigation';
import { useRouter } from 'next/router'
import usePokemones from "../hooks/usePokemones"


export default function PokemonPage() {

  // llamar al hook que creaste y acceder a la data
  // con la data vas a llamar al componente pokemonList y pasarle la data
  const {pokemones, masPokemones} = usePokemones();
  // const {pokemones, masPokemones} = usePokemones();
  // <PokemonList data = { pokemones } getMore={masPokemones} />
  const router = useRouter();
  const pokemon = pokemones.filter(poke => poke.id == router.query.pokemonId)[0]
  console.log("ARI POKEMON PAGE DATA", pokemon)
  return (
    <>

 { pokemon &&
      <div className="container" key={pokemon.id}>
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
          
        </div>}

    </>
  );
}
