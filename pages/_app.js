import React, { Component, Fragment } from 'react';
import App, { Container } from 'next/app';
import Navbar from '../components/Navbar';
import NotificationsTray from '../components/NotificationsTray';

import GlobalReset from '../styles/globalReset';
import { Provider } from 'unstated';

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <Fragment>
        <Navbar />
        <NotificationsTray />
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
        <Provider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </Container>
    );
  }
}

export default MyApp;
