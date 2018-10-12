import styled, { css, keyframes } from 'styled-components';
import { shadow } from '../../styles/global';
import { fontColors } from '../../styles/colors';
import { monoStack } from '../../styles/typography';

const CardContainer = styled.div`
  display: inline-block;
  transition: 0.1s;
  transform: ${(props) => (props.hovering ? 'translateY(-0.3rem)' : '')};
`;

const CardWrapper = styled.div`
  height: 20rem;
  width: 35rem;
  transition: all 0.2s linear;
  transform-style: preserve-3d;
  transform: ${(props) => (props.flipped ? 'rotateY(180deg)' : '')};
  box-shadow: ${(props) => (props.hovering ? shadow.high : shadow.mid)};
`;

const GradientContainer = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const InfoContainer = styled.div`
  background-color: #fff;
  width: 100%;
  height: 10rem;
  padding: 1rem;
`;

const CardSide = css`
  position: absolute;
  width: 100%;
  height: 100%;
  color: #212121;
  background-color: #fff;
  backface-visibility: hidden;
`;

const Front = styled.div`
  ${CardSide};
  display: flex;
  flex-direction: column;
`;

const Back = styled.div`
  ${CardSide};
  padding: 1rem;
  transform: rotateY(180deg);
`;

const CopyCSSText = styled.span`
  font-size: 1.2rem;
  color: ${fontColors.default};
  position: absolute;
  padding: 0.5rem;
  ${monoStack};
  border-bottom-right-radius: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
`;

export {
  CardContainer,
  CardWrapper,
  InfoContainer,
  GradientContainer,
  Front,
  Back,
  CopyCSSText
};
