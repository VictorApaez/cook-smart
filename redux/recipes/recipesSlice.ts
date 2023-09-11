import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit';
import {fetchRecipes} from './recipesThunks';
import {Recipe} from '../../data/CategoriesData';

interface RecipesState {
  recipes: Recipe[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: RecipesState = {
  recipes: [],
  status: 'idle',
  error: null,
};

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    addRecipe: (state, action: PayloadAction<Recipe>) => {
      state.recipes.push(action.payload);
    },
    editRecipe: (state, action: PayloadAction<Recipe>) => {
      const index = state.recipes.findIndex(
        recipe => recipe.id === action.payload.id,
      );
      if (index !== -1) {
        state.recipes[index] = action.payload;
      }
    },
    deleteRecipe: (state, action: PayloadAction<number>) => {
      state.recipes = state.recipes.filter(
        recipe => recipe.id !== action.payload,
      );
    },
    setRecipes: (state, action: PayloadAction<Recipe[]>) => {
      state.recipes = action.payload;
    },
    setStatus: (
      state,
      action: PayloadAction<'idle' | 'loading' | 'succeeded' | 'failed'>,
    ) => {
      state.status = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchRecipes.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.recipes = action.payload;
      })
      .addCase(fetchRecipes.rejected, state => {
        state.status = 'failed';
      });
  },
});

export const {
  addRecipe,
  editRecipe,
  deleteRecipe,
  setRecipes,
  setStatus,
  setError,
} = recipesSlice.actions;

export default recipesSlice.reducer;
