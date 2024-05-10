export const GET_POP = "GET_POP";
export const GET_ROCK = "GET_ROCK";
export const GET_HIPHOP = "GET_HIPHOP";
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";
export const SET_SEARCH_INPUT = "SET_SEARCH_INPUT";

export const fetchPop = (data) => ({ type: GET_POP, payload: data });

export const fetchRock = (data) => ({ type: GET_ROCK, payload: data });

export const fetchHiphop = (data) => ({ type: GET_HIPHOP, payload: data });

export const AddToFavorites = (song) => ({ type: ADD_TO_FAVORITES, payload: song });

export const RemoveFromFavorites = (song) => ({ type: REMOVE_FROM_FAVORITES, payload: song });

export const getSearchInput = (searchvalue) => ({ type: SET_SEARCH_INPUT, payload: searchvalue });

export const fetchGenre = (artist, genre) => {
  return (dispatch) => {
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artist)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Network error");
        }
      })
      .then((data) => {
        dispatch(genre(data.data));
      })
      .catch((err) => console.log(err));
  };
};
