import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favoritCar: [],
};

export const favoriteReducer = favoriteSlice.reducer;
export const { addFavoriteCar, deleteAllFavoriteCars, deleteFavoritCar } =
  favoriteSlice.actions;
