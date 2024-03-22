/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { MenuItem, PageItem } from "@/app/interfaces/menu.interface";

import cn from "classnames";
import styles from "./menu.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { firstLevelMenu } from "@/helpers/helpers";

export default function Menu({ menu, category }: { menu: MenuItem[]; category: number }) {
    const pathname = usePathname();

    const [localMenu, setLocalMenu] = useState<MenuItem[]>(menu);

    useEffect(() => {
        setLocalMenu(menu);
    }, [menu]);

    const openSecondLevel = (secondCategory: string) => {
        setLocalMenu(
            localMenu.map((m) => {
                if (m._id.secondCategory == secondCategory) {
                    m.isOpened = !m.isOpened;
                }
                return m;
            })
        );
    };

    const buildFirstLevel = (firstCategory: number) => {
        console.log(firstCategory);
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
                            {el.id} {firstCategory}
                            {el.id == firstCategory && buildSecondLevel(el.route)}
                        </div>
                    );
                })}
            </>
        );
    };
    const buildSecondLevel = (route: string) => {
        console.log(localMenu);
        return (
            <div className={styles.secondBlock}>
                {localMenu.map((el) => {
                    if (el.pages.map((p) => p.alias).includes(pathname.split("/")[2])) {
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
            <ul>{buildFirstLevel(category)}</ul>
        </>
    );
}
