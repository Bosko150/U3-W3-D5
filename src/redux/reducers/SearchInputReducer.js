const initialState = {
  content: "",
};

const SearchInputReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SEARCH_INPUT":
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};

export default SearchInputReducer;
