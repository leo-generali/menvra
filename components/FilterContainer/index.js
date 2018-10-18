import { Subscribe } from 'unstated';
import { GradientPageContainer } from '../../containers';

// Components
import { filterGradients } from '../../utils';
import { TAGS } from './tags';
import FilterButton from '../FilterButton';

// Styles
import { Container } from './styles';

const FilterContainer = () => {
  return (
    <Subscribe to={[GradientPageContainer]}>
      {(page) => (
        <Container>
          {TAGS.map((tag) => (
            <FilterButton
              name={tag.name}
              bg={tag.bg}
              onClick={page.handleFilter}
              filtered={page.state.currentlyFiltering.includes(tag.name)}
            >
              {tag.displayName}
            </FilterButton>
          ))}
        </Container>
      )}
    </Subscribe>
  );
};

export default FilterContainer;
