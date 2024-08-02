import React from 'react'
import { connect } from 'react-redux'
import { getPokemonsAction } from '../redux/pokemons/actions/index'
import { useRouter } from "next/router";



const mapStateToProps = (state) => {
  const pokemonReducer = state.pokemons
  return {
    pokemons: pokemonReducer.pokemons,
    messageFetch: pokemonReducer.messageFetch,
    nextUrl: pokemonReducer.nextUrl
  }
}

const mapDispatchToProps = {
  getPokemonsAction
}

const Test = ({
  getPokemonsAction,
  pokemons,
  messageFetch,
  nextUrl
}) => {
  const router = useRouter();
  
  const redirectHome = () => {
    router.push('/')
  }

  const handleGetPokemons = (nexturl) => {
    if (nextUrl) {
      getPokemonsAction(nextUrl)
    } else {
      getPokemonsAction()
    }
  }

  React.useEffect(()=>{
    console.log(pokemons, "POKEMONES EN EL REDUCER")
  },[pokemons])

  return (
    <>
      <div>ACA TENEMOS AL MENSAJE: {messageFetch}</div>

      <button onClick={()=>{handleGetPokemons(nextUrl ? nextUrl : undefined)}}>GET pokemons</button>
      <div>pokemons</div>
      {pokemons.map((pokemon)=>{
        return (
          <div>{pokemon.name}</div>
        )
      })}
      <button onClick={()=>{redirectHome()}}>Go home</button>

  
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Test)
