import styles from "./BurgerMenu.module.css";
import Button from "../Button/Button";

function BurgerMenu() {
  return (
    <div className={styles.burger_menu}>
      <Button className={styles.burger_icon} label="&#9776;" />
    </div>
  );
}
export default BurgerMenu;
