import styled from 'styled-components';
import { monoStack } from '../../styles/typography';

const GradientContainer = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const CopyCSSText = styled.span`
  font-size: 1.2rem;
  color: #ffffff;
  position: absolute;
  padding: 0.5rem;
  top: 0.5rem;
  left: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.8);
`;

export { GradientContainer, CopyCSSText };
