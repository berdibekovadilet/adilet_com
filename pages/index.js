import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>adilet.com</title>
        <meta
          name="description"
          content="Adilet Berdibekov personal portfolio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
    </div>
  );
}
