import { createGradient } from '../../utils/gradient';

const GradientCard = (props) => {
  console.log(props);
  const gradient = createGradient(props.colors, props.default_deg);
  const style = { height: '100px', width: '100px', backgroundImage: gradient };
  return (
    <div style={style}>
      <p>{props.name}</p>
    </div>
  );
};

export default GradientCard;
