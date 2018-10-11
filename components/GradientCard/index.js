import { createGradient } from '../../utils/gradient';
import { P } from '../../styles/typography';

const GradientCard = (props) => {
  const gradient = createGradient(props.colors, props.default_deg);
  const style = { height: '100px', width: '100px', backgroundImage: gradient };
  return (
    <div style={style}>
      <P>{props.name}</P>
    </div>
  );
};

export default GradientCard;
