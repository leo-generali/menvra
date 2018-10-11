import styled from 'styled-components';
import { monoStack } from '../../styles/typography';
import { brandColors } from '../../styles/colors';

const NavAnchor = styled.a`
  cursor: pointer;
  color: ${brandColors.primary};
  font-size: 1.8rem;
  ${monoStack};
  position: relative;
  z-index: 10;

  :hover {
    color: ${brandColors.primaryDark};
    z-index: 10;

    :before {
      color: white;
      position: absolute;
      content: '';
      height: 0.2rem;
      width: 100%;
      background-color: ${brandColors.primaryDark};
      bottom: 0;
      left: 0;
      z-index: 1;
    }
  }

  :before {
    z-index: 1;
    transition: 0.2s;
    position: absolute;
    background-color: ${brandColors.primary};
    content: '';
    height: 0.2rem;
    width: 100%;
    bottom: 0;
    left: 0;
  }
`;

export { NavAnchor };
