import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import MiniProjects from "../components/MiniProjects";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>adilet.com</title>
        <meta name="description" content="Сайт портфолио Адилета Бердибекова" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <Projects />
      <MiniProjects />
    </div>
  );
}
