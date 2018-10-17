import { PureComponent } from 'react';
import { Subscribe } from 'unstated';

import { copyText, randomEmoji } from '../../utils';
import { NotificationsContainer } from '../../containers';

// Styles
import { PaletteContainer, SwatchContainer, Text, Swatch } from './styles';
import { P } from '../../styles/typography';

class Palette extends PureComponent {
  render() {
    return (
      <Subscribe to={[NotificationsContainer]}>
        {(notifications) => (
          <PaletteContainer>
            {this.props.colors.map((stop, index) => {
              return (
                <SwatchContainer
                  key={index}
                  onClick={() => {
                    copyText(stop.color);
                    notifications.addNotification(
                      <P white>
                        Succesfully copied {stop.color} {randomEmoji()}
                      </P>
                    );
                  }}
                >
                  <Swatch style={{ backgroundColor: `#${stop.color}` }} />
                  <Text style={{ color: `#${stop.color}` }}>#{stop.color}</Text>
                </SwatchContainer>
              );
            })}
          </PaletteContainer>
        )}
      </Subscribe>
    );
  }
}

export default Palette;
