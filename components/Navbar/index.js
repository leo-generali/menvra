import { Component } from 'react';
import Link from 'next/link';

// Styles
import { StyledNav, StyledList, NavAnchor } from './styles';

class Navbar extends Component {
  render() {
    return (
      <StyledNav>
        <StyledList>
          <li>
            <Link prefetch href="/">
              <NavAnchor>Home</NavAnchor>
            </Link>
          </li>
          <li>
            <Link prefetch href="/gradients">
              <NavAnchor gradient>Gradients</NavAnchor>
            </Link>
          </li>
        </StyledList>
      </StyledNav>
    );
  }
}

export default Navbar;
