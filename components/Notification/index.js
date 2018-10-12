import { Component } from 'react';

// Styles
import { Container } from './styles';

class Notification extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.removeNotification();
    }, 4000);
  }

  render() {
    return (
      <Container style={this.props.style}>{this.props.children}</Container>
    );
  }
}

export default Notification;
