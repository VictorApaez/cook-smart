import {createAsyncThunk} from '@reduxjs/toolkit';
import {categories} from '../../components/CategoriesData';

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    //simulate db fetch
    const response = categories;
    return response;
  },
);
