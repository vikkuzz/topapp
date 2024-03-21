/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import CoursesIcon from "../../../utils/img/courses.svg";
import ServicesIcon from "../../../utils/img/services.svg";
import BooksIcon from "../../../utils/img/books.svg";
import ProductsIcon from "../../../utils/img/products.svg";
import { FirstLevelMenuItem, MenuItem, PageItem } from "@/app/interfaces/menu.interface";
import { TopLevelCategory } from "@/app/interfaces/page.interface";
import cn from "classnames";

import styles from "./menu.module.css";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const firstLevelMenu: FirstLevelMenuItem[] = [
    { route: "courses", name: "Курсы", icon: <CoursesIcon />, id: TopLevelCategory.Courses },
    { route: "services", name: "Сервисы", icon: <ServicesIcon />, id: TopLevelCategory.Services },
    { route: "books", name: "Книги", icon: <BooksIcon />, id: TopLevelCategory.Books },
    { route: "products", name: "Продукты", icon: <ProductsIcon />, id: TopLevelCategory.Products },
];

export default function Menu({ menu }: { menu: MenuItem[] }) {
    const pathname = usePathname();

    const [localMenu, setLocalMenu] = useState<MenuItem[]>(menu);

    const openSecondLevel = (secondCategory: string) => {
        setLocalMenu(
            menu.map((m) => {
                if (m._id.secondCategory == secondCategory) {
                    m.isOpened = !m.isOpened;
                }
                return m;
            })
        );
    };

    const buildFirstLevel = (firstCategory: number) => {
        return (
            <>
                {firstLevelMenu.map((el) => {
                    return (
                        <div key={el.route}>
                            <Link href={`/${el.route}`}>
                                <div
                                    className={cn(styles.firstLevel, {
                                        [styles.firstLevelActive]: el.id == firstCategory,
                                    })}
                                >
                                    {el.icon}
                                    <span>{el.name}</span>
                                </div>
                            </Link>
                            {el.id == firstCategory && buildSecondLevel(el.route)}
                        </div>
                    );
                })}
            </>
        );
    };
    const buildSecondLevel = (route: string) => {
        return (
            <div className={styles.secondBlock}>
                {localMenu.map((el) => {
                    if (el.pages.map((p) => p.alias).includes(pathname.split("/")[2])) {
                        console.log("work", pathname.split("/")[2]);
                        el.isOpened = true;
                    }
                    return (
                        <div key={el._id.secondCategory}>
                            <div className={styles.secondLevel} onClick={() => openSecondLevel(el._id.secondCategory)}>
                                {el._id.secondCategory}
                            </div>
                            <div
                                className={cn(styles.secondLevelBlock, {
                                    [styles.secondLevelBlockOpened]: el.isOpened,
                                })}
                            >
                                {buildThirdLevel(el.pages, route)}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    };
    const buildThirdLevel = (pages: PageItem[], route: string) => {
        return (
            <div>
                {pages.map((el) => {
                    return (
                        <Link
                            key={el.alias}
                            href={`/${route}/${el.alias}`}
                            className={cn(styles.thirdLevel, {
                                [styles.thirdLevelActive]: `/${route}/${el.alias}` == pathname,
                            })}
                        >
                            {el.category}
                        </Link>
                    );
                })}
            </div>
        );
    };
    return (
        <>
            <ul>{buildFirstLevel(0)}</ul>
        </>
    );
}
