import App from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";
import Head from 'next/head'
import Header from '../components/Header'
import BottomSticker from '../components/BottomSticker'
import theme from "../theme";
import GlobalStyles from "../GlobalStyles";

export default class MyApp extends App {
  render(): JSX.Element {
    const { Component, pageProps, router } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Head>
          <title>Berkhamsted Train App</title>
        </Head>
        <Header title="Berkhamsted to Euston" />
        <Component {...pageProps} key={router.route} />
        <BottomSticker />
      </ThemeProvider>
    );
  }
}
