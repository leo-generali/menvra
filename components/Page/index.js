import { Component, Fragment } from 'react';
import Router from 'next/router';
import { Provider } from 'unstated';
import NProgress from 'nprogress';

// Components
import Meta from './Meta';
import Navbar from '../Navbar';

// Styles
import GlobalReset from '../../styles/globalReset';

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

class Page extends Component {
  render() {
    return (
      <Provider>
        <GlobalReset />
        <Navbar />
        <Meta />
        <Fragment>{this.props.children}</Fragment>
      </Provider>
    );
  }
}

export default Page;
