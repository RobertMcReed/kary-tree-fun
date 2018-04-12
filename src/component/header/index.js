import { withRouter } from 'react-router-dom';
import React, { Component, Fragment } from 'react';

import './_header.scss';
import Controller from '../controller';

class Header extends Component {
  handleNavigation = () => {
    const { pathname } = this.props.location;
    let nextLocation = '/';
    if (pathname === '/') nextLocation = '/live';
    this.props.history.push(nextLocation);
  }

  render() {
    const atLanding = this.props.location.pathname === '/';

    const buttonText = (atLanding ? 'Code' : 'Build');
    
    const pageButton = (
      <button
        className={atLanding ? 'nav-button' : 'nav-button at-live'}
        onClick={this.handleNavigation}
        style={{ }}
      >
        { `${buttonText} a K-Ary Tree Instead` }
      </button>
    );

    const liveHeader = (
      <Fragment>
        <h2>Code a K-ary tree in the box!</h2>
        { pageButton }
      </Fragment>
    );

    const landingHeader = (
      <Fragment>
        <h2>Build your own K-ary tree!</h2>
        <nav>
          { pageButton }
        </nav>
        <Controller />
      </Fragment>
    );

    const subHeader = (atLanding ? landingHeader : liveHeader);

    return (
      <header className="header">
        <a
          href="https://github.com/RobertMcReed/kary-tree-fun" 
          rel="noopener noreferrer"
          target="_blank" 
        >
          <h1>K-Ary Trees are Fun!</h1>
        </a>
        { subHeader }
      </header>
    );
  }
}

export default withRouter(Header);
