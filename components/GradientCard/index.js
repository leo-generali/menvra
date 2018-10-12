import { Component } from 'react';
import { Spring } from 'react-spring';

import { Subscribe } from 'unstated';
import { NotificationsContainer } from '../../containers';

import { createGradient } from '../../utils/gradient';
import { copyText } from '../../utils/copyText';
import Palette from '../Palette';

// Styles
import { P } from '../../styles/typography';
import {
  CardWrapper,
  CardContainer,
  InfoContainer,
  GradientContainer,
  Front,
  Back,
  CopyCSSText
} from './styles';

class GradientCard extends Component {
  state = {
    isFlipped: false,
    isHovered: false
  };

  _flipCard = () => {
    console.log('flipping card');
    const isFlipped = !this.state.isFlipped;
    this.setState({ isFlipped });
  };

  _turnHoverOn = () => this.setState({ isHovered: true });
  _turnHoverOff = () => this.setState({ isHovered: false });

  render() {
    const gradient = createGradient(this.props.colors, this.props.default_deg);

    return (
      <CardContainer
        hovering={this.state.isHovered}
        onMouseEnter={this._turnHoverOn}
        onMouseLeave={this._turnHoverOff}
      >
        <CardWrapper
          hovering={this.state.isHovered}
          flipped={this.state.isFlipped}
        >
          <Front>
            <Gradient gradient={gradient} hovering={this.state.isHovered} />
            <InfoContainer>
              <P>{this.props.name}</P>
              <button
                style={{ background: 'red', height: '20px' }}
                onClick={this._flipCard}
              />
            </InfoContainer>
          </Front>
          <Back>
            <button
              style={{ background: 'red', height: '20px' }}
              onClick={this._flipCard}
            />
            <Palette colors={this.props.colors} />
          </Back>
        </CardWrapper>
      </CardContainer>
    );
  }
}

const Gradient = ({ gradient, hovering }) => {
  const style = { backgroundImage: gradient };
  return (
    <Subscribe to={[NotificationsContainer]}>
      {(notifications) => (
        <GradientContainer
          style={style}
          onClick={() => notifications.addNotification()}
        >
          <Spring
            speed={0.2}
            to={{
              opacity: hovering ? 1 : 0,
              transform: hovering ? 'translateY(0px)' : 'translateY(0.3rem)',
              background: hovering ? 'white' : 'rgba(0,0,0,0)'
            }}
          >
            {(styles) => <CopyCSSText style={styles}>Copy CSS</CopyCSSText>}
          </Spring>
        </GradientContainer>
      )}
    </Subscribe>
  );
};

export default GradientCard;
