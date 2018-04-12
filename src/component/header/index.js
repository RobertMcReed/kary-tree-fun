import React, { Component } from 'react';

import './_header.scss';
import Controller from '../controller';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1>K-Ary Trees are Fun!</h1>
        <Controller />
      </header>
    );
  }
}

export default Header;
