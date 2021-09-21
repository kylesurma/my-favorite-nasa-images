import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  images: [],
  memo: {},
};

const favoriteImagesSlice = createSlice({
  name: "favoriteImages",
  initialState,
  reducers: {
    hydrate: (state, action) => {
      return { ...action.payload.favorites };
    },
    addFavorite: (state, action) => {
      state.images.push(action.payload);
      state.memo[action.payload.url] = true;
    },
    removeFavorite: (state, action) => {
      state.images = state.images.filter(
        (image) => image.url !== action.payload
      );
      delete state.memo[action.payload]
    },
  },
});

export const { hydrate, addFavorite, removeFavorite } =
  favoriteImagesSlice.actions;

export default favoriteImagesSlice.reducer;