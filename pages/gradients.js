import { Component } from 'react';
import axios from 'axios';
import { Subscribe } from 'unstated';
import { filterGradients } from '../utils';

// Components
import { GradientPageContainer } from '../containers';
import NotificationsTray from '../components/NotificationsTray';
import GradientCard from '../components/GradientCard';
import FilterContainer from '../components/FilterContainer';

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
      <Subscribe to={[GradientPageContainer]}>
        {(page) => (
          <div>
            <NotificationsTray />
            <H1>Sick Ass Gradients {page.state.currentlyFiltering}</H1>
            <div style={{ display: 'flex' }}>
              <FilterContainer />
              <div>
                {gradients.map((gradient) => (
                  <GradientCard
                    {...gradient}
                    filtered={filterGradients(
                      page.state.currentlyFiltering,
                      gradient.tags
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </Subscribe>
    );
  }
}

export default Gradients;
