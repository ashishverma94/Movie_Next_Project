
import styles from "@/app/styles/common.module.css" ;
import Link from "next/link" ;

const NotFound =()=>{
    return (
        <section style={{padding:'150px', textAlign:'center'}} className={styles.container}>
            <div >
                <h1>404</h1>
                <br></br>
                <h2 style={{color:'red'}}>Not Found</h2>
                
                <p>Cound not find requested resource</p>
                <Link href='/'>
                    <button>
                        Go to Home Page
                    </button>
                </Link>
            </div>
        </section>
    )
}

export default NotFound ;