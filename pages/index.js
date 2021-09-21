import Head from "next/head";
import styles from "../styles/Home.module.css";
import PictureCard from "../components/PictureCard";
import Link from "next/link"
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux'

export async function getServerSideProps(context) {
  const res = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_TOKEN}&count=10`
  );
  const nasaImages = await res.json();
  console.log(nasaImages);

  return {
    props: { nasaImages },
  };
}

export default function Home(props) {
  const dispatch = useDispatch()
  const favorites = useSelector(state => state.favorites.images)
  return (
    <div>
      <Head>
        <title>My Favorite NASA Pictures</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
        {props.nasaImages.map((image) => {
          const { title, url, hdurl, explanation, date } = image;
          return (
            <div key={url} className={styles.card}>
            <PictureCard
              title={title}
              url={url}
              hdurl={hdurl}
              desc={explanation}
              date={date}
            />
            </div>
          );
        })}
      </div>

      <footer className={styles.footer}>
        <Link href="/"><Button variant='text'>More</Button></Link>
      </footer>
    </div>
  );
}
