import { Component } from 'react';
import axios from 'axios';

import { P } from '../styles/typography';

class Admin extends Component {
  componentDidMount() {
    axios
      .get('/api/gradients')
      .then((response) => this.setState({ gradients: response.data }));
  }

  render() {
    return (
      <div>
        <P>Admin Page</P>
      </div>
    );
  }
}

export default Admin;
