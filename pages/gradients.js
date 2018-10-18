import { Component, Fragment } from 'react';
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
import { Main } from '../styles/pages/gradients';

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
          <Fragment>
            <NotificationsTray />
            <Main>
              <FilterContainer />
              <div>
                {gradients.map((gradient, index) => (
                  <GradientCard
                    key={index}
                    {...gradient}
                    filtered={filterGradients(
                      page.state.currentlyFiltering,
                      gradient.tags
                    )}
                  />
                ))}
              </div>
            </Main>
          </Fragment>
        )}
      </Subscribe>
    );
  }
}

export default Gradients;
