
import React from 'react';
import { connect } from 'react-redux';
import { getPokemonsAction } from '../redux/actions/main'

const mapStateToProps = (state) => ({
  pokemones: store.scroll,
});

const mapDispatchToProps = {
  getPokemonsAction,
};

const TestRedux = ({
  pokemones,
  getPokemonsAction
}) => {
  React.useEffect(()=>{
    console.log("ARI", pokemones)
  },[pokemones])
  return (
    <div>
      <p id='count'>Count: {count}</p>
      <button onClick={() => getPokemonsAction()}>
        gfet poemons
      </button>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(TestRedux);