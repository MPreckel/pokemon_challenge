const initialState = {
  scrollPosition: 0,
  getData: false,
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
    default:
      return state;
  }
};

export default scrollReducer;