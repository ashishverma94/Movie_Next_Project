import Image from "next/image";
import styles from '@/app/styles/common.module.css'


const Page = async ({params}) => {
    
    await new Promise( resolve => setTimeout(resolve,1500)) ;

    const id = params.d;
    const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a83a175960mshbd6609b5a9cd471p16fc1bjsn158b783543ae',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    const res =  await fetch ( url, options ) ;
    const data = await res.json() ;
    const main_data = data[0].details;

    return (

        <div className={styles.container}>
            <h2 className={styles.movie_title}> Netflix \ <span>{main_data.type}</span></h2>
            <div className={styles.card_section}>
                <div>
                    <Image src = {main_data.backgroundImage.url} alt = {main_data.title} width = {440} height = {250}/>
                </div>
                <div >
                    <h2>{main_data.title}</h2>
                    <p>{main_data.synopsis}</p>
                </div>
            </div>

        </div>
    )
}



export default Page;