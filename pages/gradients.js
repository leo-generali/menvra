import { Component } from 'react';
import axios from 'axios';

import NotificationsTray from '../components/NotificationsTray';
import GradientCard from '../components/GradientCard';

// Styles
import { H1 } from '../styles/typography';

class Gradients extends Component {
  state = {
    gradients: []
  };

  componentDidMount() {
    axios
      .get('/api/gradients')
      .then((response) => this.setState({ gradients: response.data }));
  }

  render() {
    const { gradients } = this.state;

    return (
      <div>
        <NotificationsTray />
        <H1>Sick Ass Gradients</H1>
        {!!gradients &&
          gradients.map((gradient) => <GradientCard {...gradient} />)}
      </div>
    );
  }
}

export default Gradients;
