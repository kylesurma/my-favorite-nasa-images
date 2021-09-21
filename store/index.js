import { configureStore } from "@reduxjs/toolkit";
import favoriteImagesSlice from "./favorites";

export const getFavoritesFromLocalStorage = () => {
  try {
    const persistedState = localStorage.getItem("reduxState");
    if (persistedState) return JSON.parse(persistedState);
  } catch (e) {
    console.log(e);
  }
};

const store = configureStore({
  preloadedState: {
    images: [],
    memo: {},
  },
  reducer: {
    favorites: favoriteImagesSlice,
  },
});

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export default store;
