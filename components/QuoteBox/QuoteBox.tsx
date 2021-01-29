import React, { useEffect, useState } from "react";
import useSWR from "swr";
import Button from "../Button/Button";
import TwitterButton from "../Button/TwitterButton/TwitterButton";
import Loader from "../Loader/Loader";
import styles from "./QuoteBox.module.css";

interface IQuotes {
  q: string;
  a: string;
  h: string;
}

const QuoteBox = () => {
  const [quotes, setQuotes] = useState<Array<IQuotes> | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
  const URL = "https://zenquotes.io/api/quotes";

  const fetchQuotes = async (url: string) => {
    let response;
    try {
      response = await fetch(url);
    } catch (error) {
      return error;
    }
    const data = await response.json();
    setQuotes(data);
    if (quotes) {
      setCurrentIndex(Math.floor(Math.random() * quotes.length + 1));
    }
  };

  useEffect(() => {
    fetchQuotes(CORS_PROXY + URL);
    setCurrentIndex(0);
  }, []);

  useEffect(() => {
    if (quotes?.length === 0) {
      fetchQuotes(CORS_PROXY + URL);
    }
  }, [quotes]);

  const fetchNewQuote = (quotes: Array<IQuotes> | null, index: number) => {
    if (quotes && quotes.length === 0) {
      return;
    }
    let newQuotes = quotes
      ? [...quotes.slice(0, index), ...quotes.slice(index + 1)]
      : [];
    setQuotes(newQuotes);
    setCurrentIndex(Math.floor(Math.random() * newQuotes.length));
  };

  return (
    <>
      <div id="quote-box" className={styles.quoteBox}>
        {quotes && quotes.length ? (
          <blockquote className={styles.quoteContainer}>
            <p id="text" className={styles.quoteText}>
              {quotes[currentIndex]["q"]}
            </p>
            <cite id="author" className={styles.quoteAuthor}>
              - {quotes[currentIndex]["a"]}
            </cite>
          </blockquote>
        ) : (
          <>
            <Loader />
            <h3>Fetching New Quotes</h3>
          </>
        )}

        {quotes && quotes.length > 0 && (
          <div className={styles.quoteButtonsContainer}>
            <Button
              id="new-quote"
              className={styles.newQuoteButton}
              handleClick={() => fetchNewQuote(quotes, currentIndex)}
            >
              New Quote
            </Button>
            <TwitterButton
              tweetIntent={`${quotes[currentIndex]["q"]} - ${quotes[currentIndex]["a"]} `}
            >
              Tweet
            </TwitterButton>
          </div>
        )}
      </div>
    </>
  );
};

export default QuoteBox;
