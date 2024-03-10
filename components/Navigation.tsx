"use client" // back에서 먼저 html 렌더되고 hydrate 실행되게 하는 것.

import Link from "next/link"
import { usePathname } from "next/navigation"
// 모듈로 css 가져오기 , css가 하나의 객체가 됨.
import styles from "./navigation.module.css"

export default function Navigation() {
    const path = usePathname();
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link href="/">Home</Link> {path === "/" ? "🔥" : ""}
                </li>
                <li>
                    <Link href="about-us">About Us</Link> {path === "/about-us" ? "🔥" : ""}
                </li>
            </ul>
        </nav>
    )
}
