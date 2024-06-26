import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "../actions";

const initialState = {
  content: [],
};

const FavoriteSongReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        content: [...state.content, action.payload],
      };

    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        content: state.content.filter((song) => song !== action.payload),
      };
    default:
      return state;
  }
};

export default FavoriteSongReducer;
