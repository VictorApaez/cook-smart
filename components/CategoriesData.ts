export type Recipe = {
  id: number;
  name: string;
  image: any;
  ingredients: string[];
  instructions: string;
  tags: string[];
};

export type SubCategory = {
  name: string;
  image: any;
};

export type CategoryGroup = {
  [key: string]: SubCategory[];
};

export type CategoriesData = {
  recipes: Recipe[];
  categories: CategoryGroup;
};

export const recipes = [
  {
    id: 1,
    name: 'Spaghetti Carbonara',
    image: require('../images/pank.jpeg'),
    ingredients: ['Eggs', 'Pasta', 'Bacon'],
    instructions: 'Cooking instructions here...',
    tags: ['Italian', 'Dinner', 'Easy', 'Pork'],
  },
  {
    id: 2,
    name: 'Sushi Rolls',
    image: require('../images/pank.jpeg'),
    ingredients: ['Rice', 'Fish', 'Seaweed'],
    instructions: 'Cooking instructions here...',
    tags: ['Japanese', 'Lunch', 'Medium', 'Fish'],
  },
  {
    id: 1,
    name: 'Spaghetti Carbonara',
    image: require('../images/pank.jpeg'),
    ingredients: ['Eggs', 'Pasta', 'Bacon'],
    instructions: 'Cooking instructions here...',
    tags: ['Italian', 'Dinner', 'Easy', 'Pork'],
  },
  {
    id: 2,
    name: 'Lasagna',
    image: require('../images/pank.jpeg'),
    ingredients: ['Pasta', 'Cheese', 'Ground Beef', 'Tomato Sauce'],
    instructions: 'Cooking instructions here...',
    tags: ['Italian', 'Dinner', 'Medium', 'Beef'],
  },
  {
    id: 3,
    name: 'Risotto',
    image: require('../images/pank.jpeg'),
    ingredients: ['Rice', 'Chicken Stock', 'Parmesan', 'White Wine'],
    instructions: 'Cooking instructions here...',
    tags: ['Italian', 'Dinner', 'Medium', 'Vegetarian'],
  },
  {
    id: 4,
    name: 'Tiramisu',
    image: require('../images/pank.jpeg'),
    ingredients: ['Ladyfingers', 'Coffee', 'Mascarpone', 'Cocoa Powder'],
    instructions: 'Cooking instructions here...',
    tags: ['Italian', 'Dessert', 'Medium'],
  },
  {
    id: 5,
    name: 'Margherita Pizza',
    image: require('../images/pank.jpeg'),
    ingredients: ['Pizza Dough', 'Tomato Sauce', 'Mozzarella', 'Basil'],
    instructions: 'Cooking instructions here...',
    tags: ['Italian', 'Dinner', 'Easy', 'Vegetarian'],
  },
  {
    id: 9,
    name: 'Taco Salad',
    image: require('../images/pank.jpeg'),
    ingredients: [
      'Ground Beef',
      'Lettuce',
      'Tomato',
      'Cheese',
      'Taco Seasoning',
    ],
    instructions: 'Cooking instructions here...',
    tags: ['Mexican', 'Lunch', 'Easy', 'Beef'],
  },
  {
    id: 10,
    name: 'Chiles Rellenos',
    image: require('../images/pank.jpeg'),
    ingredients: ['Poblano Peppers', 'Cheese', 'Egg Batter', 'Tomato Sauce'],
    instructions: 'Cooking instructions here...',
    tags: ['Mexican', 'Dinner', 'Medium', 'Vegetarian'],
  },
  {
    id: 11,
    name: 'Carnitas',
    image: require('../images/pank.jpeg'),
    ingredients: ['Pork Shoulder', 'Citrus Juices', 'Spices'],
    instructions: 'Cooking instructions here...',
    tags: ['Mexican', 'Dinner', 'Medium', 'Pork'],
  },
  {
    id: 12,
    name: 'Enchiladas',
    image: require('../images/pank.jpeg'),
    ingredients: ['Tortillas', 'Chicken', 'Cheese', 'Enchilada Sauce'],
    instructions: 'Cooking instructions here...',
    tags: ['Mexican', 'Dinner', 'Medium', 'Chicken'],
  },
  {
    id: 13,
    name: 'Mexican Rice',
    image: require('../images/pank.jpeg'),
    ingredients: ['Rice', 'Tomato Sauce', 'Peas', 'Carrots'],
    instructions: 'Cooking instructions here...',
    tags: ['Mexican', 'Side Dish', 'Easy', 'Vegetarian'],
  },
  {
    id: 14,
    name: 'Flan',
    image: require('../images/pank.jpeg'),
    ingredients: ['Eggs', 'Condensed Milk', 'Vanilla', 'Sugar'],
    instructions: 'Cooking instructions here...',
    tags: ['Mexican', 'Dessert', 'Medium'],
  },
  {
    id: 15,
    name: 'Pico de Gallo',
    image: require('../images/pank.jpeg'),
    ingredients: ['Tomatoes', 'Onion', 'Cilantro', 'Jalapeno', 'Lime'],
    instructions: 'Preparation instructions here...',
    tags: ['Mexican', 'Appetizer', 'Easy', 'Vegetarian'],
  },
  {
    id: 16,
    name: 'Churros',
    image: require('../images/pank.jpeg'),
    ingredients: ['Flour', 'Sugar', 'Cinnamon', 'Oil'],
    instructions: 'Cooking instructions here...',
    tags: ['Mexican', 'Dessert', 'Medium'],
  },
  {
    id: 17,
    name: 'Tamales',
    image: require('../images/pank.jpeg'),
    ingredients: ['Corn Husks', 'Masa Dough', 'Filling (Chicken, Pork, etc.)'],
    instructions: 'Cooking instructions here...',
    tags: ['Mexican', 'Dinner', 'Medium'],
  },
  {
    id: 18,
    name: 'Mole Poblano',
    image: require('../images/pank.jpeg'),
    ingredients: ['Chiles', 'Chocolate', 'Spices', 'Chicken'],
    instructions: 'Cooking instructions here...',
    tags: ['Mexican', 'Dinner', 'Medium', 'Chicken'],
  },
];

export const categories = [
  {
    title: 'Cuisine Type',
    subCategory: [
      {name: 'Italian', image: require('../images/pank.jpeg')},
      {name: 'Mexican', image: require('../images/pank.jpeg')},
      {name: 'Chinese', image: require('../images/pank.jpeg')},
      {name: 'Japanese', image: require('../images/pank.jpeg')},
      {name: 'Indian', image: require('../images/pank.jpeg')},
      {name: 'French', image: require('../images/pank.jpeg')},
    ],
  },
  {
    title: 'Meal Type',
    subCategory: [
      {name: 'Breakfast', image: require('../images/pank.jpeg')},
      {name: 'Lunch', image: require('../images/pank.jpeg')},
      {name: 'Dinner', image: require('../images/pank.jpeg')},
      {name: 'Snack', image: require('../images/pank.jpeg')},
      {name: 'Dessert', image: require('../images/pank.jpeg')},
      {name: 'Beverage', image: require('../images/pank.jpeg')},
    ],
  },
  {
    title: 'Cooking Method',
    subCategory: [
      {name: 'Grilling', image: require('../images/pank.jpeg')},
      {name: 'Baking', image: require('../images/pank.jpeg')},
      {name: 'Frying', image: require('../images/pank.jpeg')},
      {name: 'Steaming', image: require('../images/pank.jpeg')},
      {name: 'Poaching', image: require('../images/pank.jpeg')},
      {name: 'Roasting', image: require('../images/pank.jpeg')},
    ],
  },
  {
    title: 'Skill Level',
    subCategory: [
      {name: 'Beginner', image: require('../images/pank.jpeg')},
      {name: 'Intermediate', image: require('../images/pank.jpeg')},
      {name: 'Advanced', image: require('../images/pank.jpeg')},
      {name: 'Expert', image: require('../images/pank.jpeg')},
      {name: 'Professional', image: require('../images/pank.jpeg')},
      {name: 'Master', image: require('../images/pank.jpeg')},
    ],
  },
];

export const recipeTags = Array.from(
  new Set(recipes.flatMap(recipe => recipe.tags)),
);

export const createRecipe = (newRecipe: Omit<Recipe, 'id'>): Recipe => {
  const recipeWithId = {
    ...newRecipe,
    id: recipes.length + 1,
  };

  recipes.push(recipeWithId);
  return recipeWithId;
};

export const updateRecipe = (
  id: number,
  newRecipe: Omit<Recipe, 'id'>,
): Recipe => {
  const index = recipes.findIndex(recipe => recipe.id === id);

  if (index !== -1) {
    recipes[index] = {
      ...recipes[index],
      ...newRecipe,
      id,
    };
    return recipes[index];
  } else {
    console.log('CategoriesData - updateRecipe: Recipe Not Found');
    throw new Error('Recipe Not Found');
  }
};
