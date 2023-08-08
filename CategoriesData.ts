export type SubCategory = {
  subCategory: string;
  image: any; // Change this to the appropriate image type if known
};

export type Category = {
  title: string;
  data: SubCategory[];
};

export const categories = [
  {
    title: 'Cuisine Type',
    data: [
      {subCategory: 'Italian', image: require('./images/pank.jpeg')},
      {subCategory: 'Mexican', image: require('./images/pank.jpeg')},
      {subCategory: 'Chinese', image: require('./images/pank.jpeg')},
      {subCategory: 'Japanese', image: require('./images/pank.jpeg')},
      {subCategory: 'Indian', image: require('./images/pank.jpeg')},
      {subCategory: 'French', image: require('./images/pank.jpeg')},
    ],
  },
  {
    title: 'Meal Type',
    data: [
      {subCategory: 'Breakfast', image: require('./images/pank.jpeg')},
      {subCategory: 'Lunch', image: require('./images/pank.jpeg')},
      {subCategory: 'Dinner', image: require('./images/pank.jpeg')},
      {subCategory: 'Snack', image: require('./images/pank.jpeg')},
      {subCategory: 'Dessert', image: require('./images/pank.jpeg')},
      {subCategory: 'Appetizer', image: require('./images/pank.jpeg')},
    ],
  },
  {
    title: 'Cooking Method',
    data: [
      {subCategory: 'Baking', image: require('./images/pank.jpeg')},
      {subCategory: 'Grilling', image: require('./images/pank.jpeg')},
      {subCategory: 'Frying', image: require('./images/pank.jpeg')},
      {subCategory: 'Steaming', image: require('./images/pank.jpeg')},
      {subCategory: 'Roasting', image: require('./images/pank.jpeg')},
      {subCategory: 'Stewing', image: require('./images/pank.jpeg')},
    ],
  },
  {
    title: 'Protein',
    data: [
      {subCategory: 'Chicken', image: require('./images/pank.jpeg')},
      {subCategory: 'Beef', image: require('./images/pank.jpeg')},
      {subCategory: 'Fish', image: require('./images/pank.jpeg')},
      {subCategory: 'Tofu', image: require('./images/pank.jpeg')},
      {subCategory: 'Pork', image: require('./images/pank.jpeg')},
      {subCategory: 'Lamb', image: require('./images/pank.jpeg')},
    ],
  },
  {
    title: 'Skill Level',
    data: [
      {subCategory: 'Beginner', image: require('./images/pank.jpeg')},
      {subCategory: 'Intermediate', image: require('./images/pank.jpeg')},
      {subCategory: 'Advanced', image: require('./images/pank.jpeg')},
      {subCategory: 'Expert', image: require('./images/pank.jpeg')},
      {subCategory: 'Master', image: require('./images/pank.jpeg')},
      {subCategory: 'Professional', image: require('./images/pank.jpeg')},
    ],
  },
  {
    title: 'Favorites',
    data: [
      {subCategory: 'Favorite 1', image: require('./images/pank.jpeg')},
      {subCategory: 'Favorite 2', image: require('./images/pank.jpeg')},
      {subCategory: 'Favorite 3', image: require('./images/pank.jpeg')},
      {subCategory: 'Favorite 4', image: require('./images/pank.jpeg')},
      {subCategory: 'Favorite 5', image: require('./images/pank.jpeg')},
      {subCategory: 'Favorite 6', image: require('./images/pank.jpeg')},
    ],
  },
];
