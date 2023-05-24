import { Menu } from "./Menu/Menu";
import styles from "./Layout.module.scss";
import { FC, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode | JSX.Element;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Menu />
      <section className={styles.content}>{children}</section>
    </div>
  );
};
