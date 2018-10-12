import { PureComponent } from 'react';
import { Subscribe } from 'unstated';
import { NotificationsContainer } from '../../containers';

// Libraries
import { Spring } from 'react-spring';

// Styles
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
            onClick={() =>
              notifications.addNotification(`Succesfully copied ${name}`)
            }
            onMouseEnter={this._turnHoverOn}
            onMouseLeave={this._turnHoverOff}
          >
            <Spring
              config={{ tension: 300, friction: 40 }}
              to={{
                opacity: isHovered ? 1 : 0,
                transform: isHovered ? 'translateY(0px)' : 'translateY(1rem)',
                background: isHovered ? 'white' : 'rgba(0,0,0,0)'
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
