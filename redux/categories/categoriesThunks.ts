import {createAsyncThunk} from '@reduxjs/toolkit';
import {categories} from '../../components/CategoriesData';

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    // simulating data loading for 3 seconds
    const response = await new Promise(resolve => {
      setTimeout(() => {
        resolve(categories);
      }, 3000);
    });
    return response;
  },
);
