import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <h1 className={styles.appName}>🍔 FoodApp</h1>
    </nav>
  );
}
