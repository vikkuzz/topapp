import Menu from "../Menu/menu";
import { SidebarProps } from "./Sidebar.props";

//import styles from "./Sidebar.module.css";

export const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
  return (
    <nav {...props}>
      <Menu />
    </nav>
  );
};
