import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

import './_header.scss';
import Controller from '../controller';

class Header extends Component {
  render() {
    const liveHeader = (
      <h2>Code a K-ary tree in the box!</h2>
    );

    const landingHeader = (
      <Fragment>
        <h2>Build your own K-ary tree!</h2>
        <Controller />
      </Fragment>
    );

    const subHeader = (
      this.props.location.pathname === '/'
        ? landingHeader
        : liveHeader
    );

    return (
      <header className="header">
        <h1>K-Ary Trees are Fun!</h1>
        { subHeader }
      </header>
    );
  }
}

export default withRouter(Header);
