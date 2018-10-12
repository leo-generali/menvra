import styled from 'styled-components';
import { fontColors } from '../../styles/colors';
import { monoStack } from '../../styles/typography';

const GradientContainer = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
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

export { GradientContainer, CopyCSSText };
