"use client";

import { getMenu } from "@/api/menu";
import Menu from "../Menu/menu";
import { SidebarProps } from "./Sidebar.props";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { firstLevelMenu } from "@/helpers/helpers";
import { MenuItem } from "@/app/interfaces/menu.interface";

//import styles from "./Sidebar.module.css";

export function Sidebar({ ...props }: SidebarProps) {
    //let menu: MenuItem[] = await getMenu(0);
    const pathname = usePathname();
    const [topMenu, setTopMenu] = useState<MenuItem[]>([]);
    const [idCategory, setIdCategory] = useState(0);

    useEffect(() => {
        const firstCategory = firstLevelMenu.find((el) => el.route == pathname.split("/")[1]);

        async function getMyMenu(id: number) {
            return await getMenu(id);
        }
        if (!firstCategory) {
            return;
        } else {
            setIdCategory(firstCategory.id);
            getMyMenu(firstCategory.id).then((res) => setTopMenu(res));
        }
    }, [pathname]);

    return (
        <nav {...props}>
            <Menu menu={topMenu} category={idCategory} />
        </nav>
    );
}
