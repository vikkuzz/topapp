import { Metadata } from "next";
import styles from "./page.module.css";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Main",
};

export default async function Home() {
    return (
        <main className={styles.main}>
            Main page
            <Link href={"/about"}>link</Link>
        </main>
    );
}
