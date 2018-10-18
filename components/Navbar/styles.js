import styled from 'styled-components';

const StyledNav = styled.nav`
  height: ${(props) => props.theme.navHeight};
`;

const StyledList = styled.ul`
  max-width: ${(props) => props.theme.maxWidth};
  height: 100%;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;

  li {
    height: 100%;
    display: flex;
    align-items: center;
  }
`;

/* prettier-ignore */
const NavAnchor = styled.a`
  cursor: pointer;
  font-size: 1.8rem;
  z-index: 10;
  transition: ${props => props.theme.transition.quick};
  color: ${props => props.gradient ? '#ffffff' : props.theme.primary };
  ${(props) => props.gradient && `
    padding: 1rem 4rem;
    background: ${props.theme.primary};
    border-radius: 0.3rem;

    :hover {
      transform: translateY(-0.2rem);
      box-shadow: ${props.theme.shadow.mid};
    }

    :active {
      transform: translateY(0rem);
      box-shadow: none;
    }
  `};
`;

export { NavAnchor, StyledList, StyledNav };
