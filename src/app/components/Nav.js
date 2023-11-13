'use client'
import styles from "@/app/styles/navbar.module.css";
import Link from "next/link";
import { useState } from "react";
import {CgCloseR,CgMenu} from 'react-icons/cg' ;

const Nav = () => {
    const[openMenu,setOpenMenu] = useState(false) ;
    return (
        <nav className={styles.navbar}>
            <div className={openMenu ? `${styles.active}`: ""}>
                <ul className={styles.navbarList}>
                    <li className={styles.navbarItem}>
                        <Link onClick={() => setOpenMenu(false)} className={styles.navbarLink} href="/"> Home </Link>
                    </li>
                    <li className={styles.navbarItem}>
                        <Link onClick={() => setOpenMenu(false)} className={styles.navbarLink} href="/about"> About </Link>
                    </li>
                    <li className={styles.navbarItem}>
                        <Link onClick={() => setOpenMenu(false)} className={styles.navbarLink} href="/movie"> Movie </Link>
                    </li>
                    <li className={styles.navbarItem}>
                        <Link onClick={() => setOpenMenu(false)} className={styles.navbarLink} href="/contacts"> Contact </Link>
                    </li>
                </ul>

                <div className={styles['mobile-navbar-btn']}>
                    <CgMenu
                        name="menu-outline"
                        className={styles['mobile-nav-icon']}
                        onClick={() => setOpenMenu(true)}
                    />

                    <CgCloseR
                        name="close-outline"
                        className={`${styles['mobile-nav-icon']}} ${styles['close-outline']}`}
                        onClick={() => setOpenMenu(false)}
                    />

                </div>
            </div>
        </nav>
    )
}

export default Nav