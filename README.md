# Recipe App

A simple React application to search for recipes and view detailed information about them, including ingredients and instructions. Built with [Vite](https://vitejs.dev/) for fast development and the [Spoonacular API](https://spoonacular.com/food-api) for recipe data.

## Features

- **Search Recipes:** Enter a query to search for recipes.
- **Recipe List:** Browse results with images and titles.
- **View Details:** Click "View Recipe" to see ingredients, instructions, serving size, price per serving, and dietary info.
- **Responsive UI:** Clean, modern interface using modular CSS.

## Project Structure

```
recipe-app/
  ├── public/
  ├── src/
  │   ├── components/
  │   │   ├── Container.jsx / .module.css
  │   │   ├── FoodDetails.jsx / .module.css
  │   │   ├── FoodItem.jsx / .module.css
  │   │   ├── FoodList.jsx
  │   │   ├── InnerContainer.jsx / .module.css
  │   │   ├── Item.jsx / .module.css
  │   │   ├── ItemList.jsx
  │   │   ├── Nav.jsx / .module.css
  │   │   ├── Search.jsx / .module.css
  │   ├── App.jsx / App.css
  │   └── main.jsx
  ├── index.html
  ├── package.json
  └── vite.config.js
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/recipe-app.git
   cd recipe-app/recipe-app
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Run the development server:**
   ```sh
   npm run dev
   ```
   The app will be available at [http://localhost:5173](http://localhost:5173) (or as indicated in your terminal).

### Build for Production

```sh
npm run build
```

### Preview Production Build

```sh
npm run preview
```

## API Key

This app uses the Spoonacular API. The API key is currently hardcoded for demonstration purposes. For production use, store your API key securely (e.g., in environment variables).

## License

This project is for educational/demo purposes.

---

Made with ❤️ using React
