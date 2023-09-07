import {configureStore} from '@reduxjs/toolkit';
import recipesReducer from './recipes/recipesSlice';
import categoriesReducer from './categories/categoriesSlice';
import {useDispatch, useSelector} from 'react-redux';

export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    categories: categoriesReducer,
  },
});

// added types to `RootState` and `AppDispatch`
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// added types to `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: ReturnType<typeof useSelector> = useSelector;
