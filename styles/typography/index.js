import styled, { css } from 'styled-components';
import { brandColors, fontColors } from '../colors';
import { uppercase, spacing, primaryColor } from './utils';

export const fontStack = css`
  font-family: -apple-system, BlinkMacSystemFont, 'Helvetica', 'Segoe',
    sans-serif;
`;

export const monoStack = css`
  font-family: 'Input Mono', 'Menlo', 'Inconsolata', 'Roboto Mono', monospace;
`;

export const H1 = styled.h1`
  ${fontStack};
  color: ${fontColors.default};
  font-weight: 900;
  font-size: 2.8rem;
  line-height: 1.25;
  ${(props) => uppercase(props.uppercase)};
  ${(props) => spacing(props.spaced)};
  ${(props) => primaryColor(props.primaryColor)};
`;

export const H2 = styled.h2`
  ${fontStack};
  color: ${fontColors.default};
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 1.25;
`;

export const H3 = styled.h3`
  ${fontStack};
  color: ${fontColors.default};
  font-weight: 500;
  font-size: 2rem;
  line-height: 1.5;
`;

export const H4 = styled.h4`
  ${fontStack};
  color: ${fontColors.default};
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.6rem;
`;

export const H5 = styled.h5`
  ${fontStack};
  color: ${fontColors.default};
  font-weight: 500;
  font-size: 1.4;
  line-height: 1.4;
`;

export const H6 = styled.h6`
  ${fontStack};
  color: ${fontColors.default};
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.675rem;
  line-height: 1.2;
`;

export const P = styled.p`
  ${fontStack};
  color: ${fontColors.default};
  font-weight: 400;
  font-size: 1.7rem;
  line-height: 1.4;
`;

export const Span = styled.span`
  ${fontStack};
  color: ${fontColors.default};
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.4;
`;
