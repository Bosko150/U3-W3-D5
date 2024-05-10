import { PLAY_SONG } from "../actions";

const initialState = {
  content: null,
};

const playSongReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAY_SONG:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};

export default playSongReducer;
