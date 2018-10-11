import { Component } from 'react';
import GradientCard from '../components/GradientCard';

// Styles
import { H1 } from '../styles/typography';

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
        <H1>Sick Ass Gradients</H1>
        {gradients.map((gradient) => (
          <GradientCard {...gradient} />
        ))}
      </div>
    );
  }
}

export default Gradients;
