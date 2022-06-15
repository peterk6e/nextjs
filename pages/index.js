import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavBar from "../components/NavBar.jsx";

export default function Home() {
  return (
    <div className={styles.container}>
    <Head>
      <title>Next app</title>
    </Head>
      <div className={styles.hpTitle}>Next App</div>
    </div>
  );
}
