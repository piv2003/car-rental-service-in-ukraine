import { createSelector } from '@reduxjs/toolkit';

export const selectCars = state => state.cars.items;
export const selectFilter = state => state.filter;
export const selectAmountCars = state => state.cars.items.length;
export const selectLoading = state => state.cars.isLoading;
export const selectFavoritesCars = state => state.favorite.favoritCar;
