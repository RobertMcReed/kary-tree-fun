import React, { Component } from 'react';

import './_header.scss';
import Controller from '../controller';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <nav className="nav">
          <Controller />
        </nav>
      </header>
    );
  }
}

export default Header;
