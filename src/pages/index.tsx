
import HeaderLogo from "../components/Header";
import PokemonList from "../components/PokemonList";
import { PokemonsReducerType } from "../redux/pokemons/reducer";
import { getPokemons } from "../redux/pokemons/action";
import { connect } from 'react-redux'


export type pokemonsGetType = {
  getPokemons: Function
  pokemonsReducer: PokemonsReducerType
}

const Home = ({getPokemons, pokemonsReducer} : pokemonsGetType) => {
  // llamar al hook que creaste y acceder a la data
  // con la data vas a llamar al componente pokemonList y pasarle la data
  // const {pokemones, masPokemones} = usePokemones();
  // <PokemonList data = { pokemones } getMore={masPokemones} />


  return (
    <div>
      <HeaderLogo />
      <PokemonList />
    </div>
  )
}

const mapStateToProps = (state: any) => {
  const pokemonsReducer = state.pokemon
  return {
    pokemonsReducer: pokemonsReducer,
  }
}

const mapDispatchToProps = {
  getPokemons,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
