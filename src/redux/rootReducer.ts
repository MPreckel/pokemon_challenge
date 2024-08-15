import { combineReducers } from 'redux'

import pokemonsReducer from './pokemons/reducer'
import testReducer from './tester/reducer'

const rootReducer = combineReducers({
  pokemons : pokemonsReducer,
  test: testReducer, 
})


export default rootReducer
