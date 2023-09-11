import {configureStore} from '@reduxjs/toolkit';
import axios from 'axios';
import categoriesReducer from '../redux/categories/categoriesSlice';
import {fetchCategories} from '../redux/categories/categoriesThunks';
import recipesReducer from '../redux/recipes/recipesSlice';
import {categories} from '../data/CategoriesData';

jest.mock('axios');

describe('categories thunk tests', () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        recipes: recipesReducer,
        categories: categoriesReducer,
      },
    });
  });

  it('should update categories state on thunk success', async () => {
    axios.get.mockResolvedValueOnce({
      data: categories,
    });

    await store.dispatch(fetchCategories());

    const currentState = store.getState();

    expect(currentState.categories.status).toBe('succeeded');
    expect(currentState.categories.categories).toEqual(categories);
  });
});
