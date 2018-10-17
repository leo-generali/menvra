import { Subscribe } from 'unstated';
import { GradientPageContainer } from '../../containers';

// Components

// Styles
import { Container } from './styles';

const FilterContainer = () => {
  return (
    <Subscribe to={[GradientPageContainer]}>
      {(page) => (
        <Container>
          <button name="pink" onClick={page.handleFilter}>
            Pink
          </button>
          <button name="blue" onClick={page.handleFilter}>
            Blue
          </button>
        </Container>
      )}
    </Subscribe>
  );
};

export default FilterContainer;
