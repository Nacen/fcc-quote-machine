import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <cite>
        Inspirational quotes provided by{" "}
        <a href="https://zenquotes.io/" target="_blank">
          ZenQuotes API
        </a>
      </cite>
    </footer>
  );
};

export default Footer;
