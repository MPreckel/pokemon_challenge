
import * as t from "../types";

export enum ServerStatus { "IDLE", "FETCH", "FETCHING", "FETCH_ERROR" }

export type PokemonsReducerType = {
  pokemonStatus?: ServerStatus;
  pokemons?: any
}

const globalState: PokemonsReducerType = {
  pokemonStatus: ServerStatus.IDLE,
  pokemons: undefined,
}


export type PosibleActions =
  { type: "GET_POKEMONS_FETCHING" } |
  { type: "GET_POKEMONS_FETCH", payload: any } |
  { type: "GET_POKEMONS_FETCH_ERROR" }


const reducer = (state = globalState, action: PosibleActions): any => {
  switch (action.type) {
    case t.GET_POKEMONS_FETCH:
      // const currentPokemons = [...state.pokemons]
      console.log(action.payload, "ARIEL PAYLOAD IN ACTION")
      return {
        ...state,
        pokemonStatus: ServerStatus.FETCH,
        pokemons: action.payload
      }
  
    case t.GET_POKEMONS_FETCHING:
      return {
        ...state,
        pokemonStatus: ServerStatus.FETCHING,
      }
    case t.GET_POKEMONS_FETCH_ERROR:
      return {
        ...state,
        pokemonStatus: ServerStatus.FETCH_ERROR,
      }
    
    default:
      return {
        ...state,
      }
  }
}

export default reducer;