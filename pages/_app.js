import React, { Component, Fragment } from 'react';
import App, { Container } from 'next/app';
import GlobalReset from '../styles/globalReset';
import Navbar from '../components/Navbar';

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <Fragment>
        <Navbar />
        {children}
      </Fragment>
    );
  }
}

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
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    );
  }
}

export default MyApp;
