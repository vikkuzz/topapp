//import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "../globals.css";

const notoSans = Noto_Sans_KR({
    subsets: ["latin", "cyrillic"],
    weight: ["400", "500", "600", "700", "900"],
});

import styles from "./page.module.css";
import { Header } from "../components/Header/Header";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Footer } from "../components/Footer/Footer";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={notoSans.className}>
                <div className={`${styles.wrapper}`}>
                    <Header className={styles.header} />

                    <Sidebar className={styles.sidebar} />
                    <div className={styles.body}>{children}</div>

                    <Footer className={styles.footer} />
                </div>
            </body>
        </html>
    );
}
