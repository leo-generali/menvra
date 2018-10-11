import React from 'react';
import App, { Container } from 'next/app';
import GlobalReset from '../styles/globalReset';

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <GlobalReset />
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;
