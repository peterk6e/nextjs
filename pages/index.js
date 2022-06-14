import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
    <Head>
      <title>Next app</title>
    </Head>
      <Link href="/about">About</Link>
    </div>
  );
}
