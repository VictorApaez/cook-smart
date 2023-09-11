import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchCategories} from './categoriesThunks';
import {Category} from '../../data/CategoriesData';

export type CategoriesState = {
  categories: Category[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
};

const initialState: CategoriesState = {
  categories: [],
  status: 'idle',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory: (state, action) => {
      state.categories.push(action.payload);
    },
    removeCategory: (state, action) => {
      state.categories = state.categories.filter(
        category => category.title !== action.payload,
      );
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = 'failed';
      })
      .addCase(fetchCategories.pending, (state, action) => {
        state.status = 'loading';
      });
  },
});

export const {addCategory, removeCategory} = categoriesSlice.actions;

export default categoriesSlice.reducer;
