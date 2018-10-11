import { Component } from 'react';

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
          <p>{gradient.name}</p>
        ))}
      </div>
    );
  }
}

export default Gradients;
