/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { getMenu } from "@/api/menu";
import CoursesIcon from "../../../utils/img/courses.svg";
import ServicesIcon from "../../../utils/img/services.svg";
import BooksIcon from "../../../utils/img/books.svg";
import ProductsIcon from "../../../utils/img/products.svg";
import { FirstLevelMenuItem } from "@/app/interfaces/menu.interface";
import { TopLevelCategory } from "@/app/interfaces/page.interface";
import cn from "classnames";
import { useContext } from "react";
import { AppContext } from "@/context/app.context";

import styles from "./menu.module.css";

const firstLevelMenu: FirstLevelMenuItem[] = [
    { route: "courses", name: "Курсы", icon: <CoursesIcon />, id: TopLevelCategory.Courses },
    { route: "services", name: "Сервисы", icon: <ServicesIcon />, id: TopLevelCategory.Services },
    { route: "books", name: "Книги", icon: <BooksIcon />, id: TopLevelCategory.Books },
    { route: "products", name: "Продукты", icon: <ProductsIcon />, id: TopLevelCategory.Products },
];

export default async function Menu() {
    //const menu = await getMenu(0);
    const { menu, setMenu, firstCategory } = useContext(AppContext);

    const buildFirstLevel = () => {
        return (
            <>
                {firstLevelMenu.map((el) => {
                    return (
                        <div key={el.route}>
                            <a href={`/${el.route}`}>
                                <div
                                    className={cn(styles.firstLevel, {
                                        [styles.firstLevelActive]: el.id == firstCategory,
                                    })}
                                >
                                    {el.icon}
                                    <span>{el.name}</span>
                                </div>
                            </a>
                            {el.id == firstCategory && buildSecondLevel()}
                        </div>
                    );
                })}
            </>
        );
    };
    const buildSecondLevel = () => {
        return (
            <div>
                {/* {menu.map((el) => {
                    return <div></div>;
                })} */}
            </div>
        );
    };
    const buildThirdLevel = () => {
        return <></>;
    };
    return (
        <>
            <ul>{buildFirstLevel()}</ul>
        </>
    );
}
