import styles from "@/app/styles/navbar.module.css" ;
import Link from "next/link" ;
import Image from "next/image" ;
import Nav from "@/app/components/Nav" ;

const Header =()=>{
    return (
        <header className={styles.main_header}>
            <div className={styles.navbar_brands}>
                <Link href="/">
                    <Image src="/logo.jpg" alt="my logo image" width={140} height={80} />
                </Link>
            </div>

            <Nav/>
        </header>
    )
}

export default Header ;