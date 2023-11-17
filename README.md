# CookSmart - Your Personal Recipe Guide

## About CookSmart

CookSmart is a React Native app designed for culinary enthusiasts and home cooks. It offers an intuitive way to navigate through a wide variety of recipes, categorized by tags for easy discovery. Users can not only explore existing recipes but also have the flexibility to create new ones and edit existing recipes. This project is currently a work in progress, aiming to provide a user-friendly experience for cooking enthusiasts.

## Features

- **Explore Recipes:** Browse through a curated list of recipes categorized by various tags.
- **Recipe Categories:** Recipes are organized into categories such as cuisine type, meal type, cooking method, and skill level.
- **Create and Edit Recipes:** Users can add their own recipes to the app and edit existing ones.
- **Tag-Based Navigation:** Easily find recipes based on tags like 'Italian', 'Dinner', 'Easy', etc.

## Project Structure

The project uses a structured data model to manage recipes and categories:

- **Recipe:** Contains details like name, image, ingredients, instructions, and tags.
- **Category:** Comprises various subcategories for organizing recipes.
- **Data Management:** Functions to create, update, and manage recipes and tags.

## Technology Stack

- **React Native:** For building the mobile app.
- **React Navigation:** For implementing navigation between different screens.
- **Redux & React Redux:** For state management.
- **Axios:** For handling API requests.
- **Various Development Tools:** Including ESLint, Jest for testing, and TypeScript for type safety.

## Running the Project

1. **Clone the repository:**
   ```bash
    git clone https://github.com/VictorApaez/cook-smart
   ```
2. **Install dependencies:**
   ```bash
    npm install
   ```
3. **Run the app on iOS/Android:**
   ```bash
    npm run ios // For iOS
    npm run android // For Android
   ```


