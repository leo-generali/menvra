import { Button } from './styles';
import { Span } from '../../styles/typography';

const FilterButton = (props) => {
  const styles = {
    backgroundColor: props.filtered ? props.bg : '#3c484e'
  };

  return (
    <Button {...props} style={styles}>
      <span>{props.children}</span>
    </Button>
  );
};

export default FilterButton;
