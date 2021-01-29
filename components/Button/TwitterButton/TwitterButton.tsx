import React from "react";
import Button from "../Button";
import styles from "./TwitterButton.module.css";

interface TwitterButtonProps {
  tweetIntent?: string;
}

const TwitterButton: React.FC<TwitterButtonProps> = ({
  children,
  tweetIntent = "",
}) => {
  return (
    <Button className={styles.twitterButton}>
      <a
        id="tweet-quote"
        href={`https://twitter.com/intent/tweet?text=${tweetIntent}`}
        target="_blank"
        className={styles.twitterLink}
      >
        <img
          src="./Twitter_Social_Icon_Rounded_Square_Color.svg"
          className={styles.twitterIcon}
        />
        {children}
      </a>
    </Button>
  );
};

export default TwitterButton;
