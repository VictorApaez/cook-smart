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
