import styles from "./Menu.module.scss";
import { MenuItem } from "./MenuItem/MenuItem";
import { menuItems } from "./menuItems";

export const Menu = () => (
  <nav className={styles.menu}>
    <ul>
      {menuItems.map((item) => (
        <MenuItem key={item.to} item={item} />
      ))}
    </ul>
  </nav>
);
