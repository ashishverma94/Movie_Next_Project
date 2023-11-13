import heroStyles from "@/app/styles/herosection.module.css";
import styles from "@/app/styles/common.module.css";
import Link from "next/link";
import Image from "next/image";


const Herosection = ({ title, imageUrl }) => {
    return (
        <main className={heroStyles.main_section}>
            <div className={styles.container}>
                <div className={styles.grid_two_section}>
                    <div className={heroStyles.hero_content}>
                        <h1>{title}</h1>
                        <p style={{textAlign:'justify'}}>
                        Movies can help us face the reality of what&apos;s happening in society.
                        They can improve our imagination and expand our field of perception.
                        Movie are much more than just something we watch it is a story being told by the writer for us to interpret, it can be inspiring or gloomy it all depends how we as viewers see it. 
                        It can also be a way for some to live out an imaginary existence in and conventional world. 
                        Just look at movies like tron, star gate or even the borne series it helps people live out the life they desire. 
                        Movies are also a way for the media to influence and open the minds of its viewers. 
                        It is much more then entertaining, informing and educating, movies plays a big role in the way we perceive things. 
                        </p>
                        <Link href="movie">
                            <Link href='/movie'>
                                <button >
                                    Explore Movies
                                </button>
                            </Link>
                        </Link>
                    </div>

                    <div className={heroStyles.hero_image}>
                        <Image src={imageUrl} alt="watched pic" width={500} height={500} />
                    </div>
                </div>
            </div>
            <div className={heroStyles['custom-shape-divider-bottom-1681647578']}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                     preserveAspectRatio="none">
                    <path
                        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                        className={heroStyles["shape-fill"]}></path>
                </svg>
            </div>
        </main>
    )
}

export default Herosection;