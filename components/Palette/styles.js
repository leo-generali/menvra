import styled from 'styled-components';
import { monoStack } from '../../styles/typography';

const PaletteContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const SwatchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-between;
  cursor: pointer;
  margin: 0 auto;
  margin-bottom: 0.5rem;

  :last-child {
    margin-bottom: 0;
  }
`;

const Text = styled.span`
  font-size: 1.8rem;
  ${monoStack};
`;

const Swatch = styled.div`
  height: 3rem;
  width: 3rem;
`;

export { PaletteContainer, SwatchContainer, Text, Swatch };
