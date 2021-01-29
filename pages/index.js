import Head from "next/head";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer/Footer";
import QuoteBox from "../components/QuoteBox/QuoteBox";

export default function Home() {
  return (
    <div>
      <Head>
        <title>FCC-Random-Quote-Machine</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="text/javascript"
          src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <main className={styles.main}>
        <QuoteBox />
      </main>

      <Footer />
    </div>
  );
}
