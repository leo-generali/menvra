import { Component } from 'react';
import Router from 'next/router';
import { Provider } from 'unstated';
import NProgress from 'nprogress';
import { ThemeProvider } from 'styled-components';

// Components
import Meta from './Meta';
import Navbar from '../Navbar';

// Styles
import GlobalReset from '../../styles/globalReset';
import { theme } from '../../styles/theme';
import { PageContainer } from './styles';

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
      <ThemeProvider theme={theme}>
        <Provider>
          <GlobalReset />
          <Navbar />
          <Meta />
          <PageContainer>{this.props.children}</PageContainer>
        </Provider>
      </ThemeProvider>
    );
  }
}

export default Page;
