import { Component } from 'react';
import GradientCard from '../components/GradientCard';
import axios from 'axios';

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
        <H1>Sick Ass Gradients</H1>
        {!!gradients &&
          gradients.map((gradient) => <GradientCard {...gradient} />)}
      </div>
    );
  }
}

export default Gradients;
