import styles from "./Item.module.css";

export default function Item({ item }) {
  return (
    <div>
      <div key={item.id} className={styles.itemContainer}>
        <div className={styles.imageContainer}>
          <img
            src={`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`}
            alt=""
            className={styles.image}
          />
        </div>
        <div className={styles.nameContainer}>
          <div className={styles.name}>{item.name}</div>
          <div className={styles.amount}>
            {item.amount} {item.unit}
          </div>
        </div>
      </div>
    </div>
  );
}
