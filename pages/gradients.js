import { Component } from 'react';
import GradientCard from '../components/GradientCard';

class Gradients extends Component {
  static async getInitialProps({ query: { gradients } }) {
    return {
      gradients
    };
  }

  render() {
    const { gradients } = this.props;

    return (
      <div>
        <h1>Sick Ass Gradients</h1>
        {gradients.map((gradient) => (
          <GradientCard {...gradient} />
        ))}
      </div>
    );
  }
}

export default Gradients;
