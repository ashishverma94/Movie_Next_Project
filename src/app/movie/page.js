import MovieCard from "../components/MovieCard";
import styles from "@/app/styles/common.module.css"

const Movie = async () => {

    // await new Promise( resolve => setTimeout(resolve,2000)) ;
    
    const url = process.env.RAPID_KEY;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a83a175960mshbd6609b5a9cd471p16fc1bjsn158b783543ae',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    const res = await fetch(url, options);
    const data = await res.json();
    const main_data =  data.titles;
    return (
        <>
        {/* style={{height:'5500px'}} */}
            <section   className={styles.movieSection}>
                <div className={styles.container}>
                    <h2>Series & Movies</h2>
                    <div className={styles.card_section}>
                    {
                         main_data.map((curElem) => {
                            if ( curElem.jawSummary.backgroundImage.url)
                            return <MovieCard key={curElem.id}{...curElem} />
                        })
                    }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Movie;

