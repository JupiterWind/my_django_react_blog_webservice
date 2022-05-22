import '../src/styles/globals.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Head from 'next/head';

const MyApp = ({ Component, pageProps, router }) => {
  return (
    <>
      <Head>
        <title>Jupiter Wind</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="icon" href="../favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
