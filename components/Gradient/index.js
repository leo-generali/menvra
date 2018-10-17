import { PureComponent } from 'react';
import { Subscribe } from 'unstated';
import { Spring } from 'react-spring';

import { copyText, randomEmoji } from '../../utils';
import { NotificationsContainer } from '../../containers';

// Styles
import { P } from '../../styles/typography';
import { GradientContainer, CopyCSSText } from './styles';

class Gradient extends PureComponent {
  state = {
    isHovered: false
  };

  _turnHoverOn = () => this.setState({ isHovered: true });
  _turnHoverOff = () => this.setState({ isHovered: false });

  render() {
    const { gradient, name } = this.props;
    const { isHovered } = this.state;
    const style = { backgroundImage: gradient };

    return (
      <Subscribe to={[NotificationsContainer]}>
        {(notifications) => (
          <GradientContainer
            style={style}
            onClick={() => {
              copyText(gradient);
              notifications.addNotification(
                <P white>
                  Succesfully copied {name} {randomEmoji()}
                </P>
              );
            }}
            onMouseEnter={this._turnHoverOn}
            onMouseLeave={this._turnHoverOff}
          >
            <Spring
              config={{ tension: 300, friction: 40 }}
              to={{
                opacity: isHovered ? 1 : 0,
                transform: isHovered ? 'translateY(0px)' : 'translateY(1rem)'
              }}
            >
              {(styles) => <CopyCSSText style={styles}>Copy CSS</CopyCSSText>}
            </Spring>
          </GradientContainer>
        )}
      </Subscribe>
    );
  }
}

export default Gradient;
