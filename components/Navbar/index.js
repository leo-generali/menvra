import { Component } from 'react';
import Link from 'next/link';

// Styles
import { NavAnchor } from './styles';

class Navbar extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link prefetch href="/">
              <NavAnchor>Home</NavAnchor>
            </Link>
          </li>
          <li>
            <Link prefetch href="/gradients">
              <NavAnchor>Gradients</NavAnchor>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
