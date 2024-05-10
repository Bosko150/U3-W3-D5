import { configureStore, combineReducers } from "@reduxjs/toolkit";
import genresReducer from "../reducers/GenresReducer";
import FavoriteSongReducer from "../reducers/FavoritesReducer";
import SearchInputReducer from "../reducers/SearchInputReducer";
import playSongReducer from "../reducers/playSongReducer";

const rootReducer = combineReducers({
  genres: genresReducer,
  favoriteSongs: FavoriteSongReducer,
  searchInput: SearchInputReducer,
  player: playSongReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
