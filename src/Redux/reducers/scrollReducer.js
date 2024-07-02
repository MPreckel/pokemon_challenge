const initialState = {
  scrollPosition: 0,
  getData: false,
  pokemones: [],
};

const scrollReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SCROLL_POSITION':
      return {
        ...state,
        scrollPosition: action.payload,
      };
    case 'SET_GET_DATA':
      return {
        ...state,
        getData: action.payload,
      };
    case 'SET_POKEMONES':
      return {
        ...state,
        pokemones: action.payload,
      };
    default:
      return state;
  }
};

export default scrollReducer;