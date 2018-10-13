import { PureComponent } from 'react';
import { copyText } from '../../utils';

// Styled
import { PaletteContainer, SwatchContainer, Text, Swatch } from './styles';

class Palette extends PureComponent {
  render() {
    return (
      <PaletteContainer>
        {this.props.colors.map((stop) => {
          return (
            <SwatchContainer onClick={() => copyText(`#${stop.color}`)}>
              <Swatch style={{ backgroundColor: `#${stop.color}` }} />
              <Text style={{ color: `#${stop.color}` }}>#{stop.color}</Text>
            </SwatchContainer>
          );
        })}
      </PaletteContainer>
    );
  }
}

export default Palette;
