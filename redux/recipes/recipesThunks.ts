import {createAsyncThunk} from '@reduxjs/toolkit';
import {recipes} from '../../data/CategoriesData';

export const fetchRecipes = createAsyncThunk(
  'recipes/fetchRecipes',
  async () => {
    //simulating fetching data
    // const response = await fetch('YOUR_DB_ENDPOINT_HERE');
    const response = recipes;

    return response;
  },
);
