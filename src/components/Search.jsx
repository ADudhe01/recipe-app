import { useEffect, useState } from "react";
import styles from "./Search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "12bd6151686a4d8d9a8f5bdcad0a6ac5";

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");

  // Syntax for the useEffect hook
  useEffect(() => {
    async function fetchFood() {
      // this is a string literal (JS concept) -> creates dynamic strings
      const response = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await response.json();
      console.log(data.results);

      setFoodData(data.results); // Update the foodData state with the fetched results
    }
    fetchFood();
  }, [query]); // Dependency array, effect runs when 'query' changes

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      />
    </div>
  );
}
