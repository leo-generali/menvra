import { Component } from 'react';
import { Spring } from 'react-spring';

import { createGradient } from '../../utils';

import Gradient from '../Gradient';
import Palette from '../Palette';

// Styles
import { P } from '../../styles/typography';
import {
  CardWrapper,
  CardContainer,
  InfoContainer,
  Front,
  Back
} from './styles';

class GradientCard extends Component {
  state = {
    isFlipped: false,
    isHovered: false
  };

  _flipCard = () => {
    const isFlipped = !this.state.isFlipped;
    this.setState({ isFlipped });
  };

  _turnHoverOn = () => this.setState({ isHovered: true });
  _turnHoverOff = () => this.setState({ isHovered: false });

  render() {
    const gradient = createGradient(this.props.colors, this.props.default_deg);

    return (
      this.props.filtered && (
        <CardContainer
          isHovered={this.state.isHovered}
          onMouseEnter={this._turnHoverOn}
          onMouseLeave={this._turnHoverOff}
          style={this.props.style}
        >
          <CardWrapper
            isHovered={this.state.isHovered}
            flipped={this.state.isFlipped}
          >
            <Front>
              <Gradient gradient={gradient} name={this.props.name} />
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
      )
    );
  }
}

export default GradientCard;
