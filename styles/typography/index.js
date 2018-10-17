import styled, { css } from 'styled-components';
import { uppercase, spacing } from './utils';

const monoStack = css`
  font-family: 'Input Mono', 'Menlo', 'Inconsolata', 'Roboto Mono', monospace;
`;

const H1 = styled.h1`
  font-weight: 900;
  font-size: 2.8rem;
  line-height: 1.25;
  color: ${(props) =>
    props.primary ? props.theme.primary : props.theme.primaryText};
  ${(props) => uppercase(props.uppercase)};
  ${(props) => spacing(props.spaced)};
`;

const Span = styled.span`
  font-weight: inherit;
  font-size: inherit;
  line-height: inherit;
  color: ${(props) => (props.primary ? props.theme.primary : inherit)};
  ${(props) => uppercase(props.uppercase)};
  ${(props) => spacing(props.spaced)};
`;

const P = styled.p`
  font-weight: 400;
  font-size: 1.7rem;
  line-height: 1.4;
  color: ${(props) => (props.white ? '#ffffff' : props.theme.primaryText)};
  ${(props) => uppercase(props.uppercase)};
  ${(props) => spacing(props.spaced)};
`;

export { monoStack, H1, P, Span };
