import { Component } from 'react';
import { createGradient } from '../../utils/gradient';
import Palette from '../Palette';

// Styles
import { P } from '../../styles/typography';
import {
  CardWrapper,
  CardContainer,
  InfoContainer,
  GradientContainer,
  Front,
  Back
} from './styles';

class GradientCard extends Component {
  state = {
    isFlipped: true,
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
    const style = { backgroundImage: gradient };

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
            <GradientContainer style={style} />
            <InfoContainer>
              <P>{this.props.name}</P>
              <button
                style={{ background: 'red', height: '20px' }}
                onClick={this._flipCard}
              />
            </InfoContainer>
          </Front>
          <Back>
            <P>{this.props.name}</P>
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

export default GradientCard;
