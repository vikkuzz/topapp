import { getMenu } from "@/api/menu";
import Menu from "../Menu/menu";
import { SidebarProps } from "./Sidebar.props";

//import styles from "./Sidebar.module.css";

export async function Sidebar({ ...props }: SidebarProps) {
    const menu = await getMenu(0);
    return (
        <nav {...props}>
            <Menu menu={menu} />
        </nav>
    );
}
