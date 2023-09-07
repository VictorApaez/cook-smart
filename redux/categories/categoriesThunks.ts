import {createAsyncThunk} from '@reduxjs/toolkit';
import {categories} from '../../components/CategoriesData';
import {Category} from '../../components/CategoriesData';

export const fetchCategories = createAsyncThunk<
  // return type
  Category[],
  // argument type
  void,
  // config object
  {}
>('categories/fetchCategories', async () => {
  //simulate db fetch
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(categories), Math.random() * 1000);
  });
});
