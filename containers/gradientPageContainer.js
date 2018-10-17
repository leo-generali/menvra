import { Container } from 'unstated';

class GradientPageContainer extends Container {
  state = {
    currentlyFiltering: []
  };

  handleFilter = (event) => {
    event.preventDefault();
    const tag = event.currentTarget.name;
    if (this.state.currentlyFiltering.includes(tag)) {
      this._removeFilter(tag);
    } else {
      this._addFilter(tag);
    }
  };

  _addFilter = (tag) => {
    const currentlyFiltering = [...this.state.currentlyFiltering, tag];
    this.setState({ currentlyFiltering });
  };

  _removeFilter = (tag) => {
    const currentlyFiltering = this.state.currentlyFiltering.filter(
      (filter) => filter !== tag
    );
    this.setState({ currentlyFiltering });
  };
}

export default GradientPageContainer;
