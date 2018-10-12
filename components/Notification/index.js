import { Component } from 'react';

// Styles
import { Container } from './styles';

class Notification extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.removeNotificiation();
    }, 4000);
  }

  render() {
    return <Container>{this.props.children}</Container>;
  }
}

export default Notification;
