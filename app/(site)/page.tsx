import { Metadata } from "next";
import styles from "../page.module.css";

export const metadata: Metadata = {
  title: "Main",
};

export default async function Home() {
  return <main className={styles.main}>Main page</main>;
}
