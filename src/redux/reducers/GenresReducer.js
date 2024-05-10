import { GET_POP, GET_ROCK, GET_HIPHOP } from "../actions";

const initialState = {
  pop: [],
  rock: [],
  hiphop: [],
};

const genresReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POP:
      return {
        ...state,
        pop: action.payload,
      };
    case GET_ROCK:
      return {
        ...state,
        rock: action.payload,
      };
    case GET_HIPHOP:
      return {
        ...state,
        hiphop: action.payload,
      };
    default:
      return state;
  }
};

export default genresReducer;
