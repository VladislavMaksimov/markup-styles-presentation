import { FC } from "react";
import { NavLink } from "react-router-dom";
import cx from "classnames";
import styles from "./MenuItem.module.scss";
import { ManuItem } from "../menuItems";

interface MenuItemProps {
  item: ManuItem;
}

export const MenuItem: FC<MenuItemProps> = ({ item }) => {
  const { to, name } = item;
  return (
    <li className={styles.item}>
      <NavLink
        to={to}
        className={({ isActive }) =>
          cx(styles.link, { [styles.active]: isActive })
        }
      >
        {name}
      </NavLink>
    </li>
  );
};
