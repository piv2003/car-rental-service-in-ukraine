import { createSlice } from '@reduxjs/toolkit';

const initialState = { make: '', mileageFrom: 0, mileageTo: 0, rentalPrice: 0 };

export const filterSlice = createSlice({});
export const { setFilter, clearFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
