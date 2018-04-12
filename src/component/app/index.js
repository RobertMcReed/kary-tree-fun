import { hot } from 'react-hot-loader';
import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Live from '../live';
import Header from '../header';
import Footer from '../footer';
import Landing from '../landing';

import './_app.scss';

class App extends Component {
  render() {
    return (
      <div className="app" >
        <BrowserRouter>
          <Fragment>
            <Header />
            <main className="main">
              <Route exact path="/" component={Landing} />
              <Route exact path="/live" component={Live} />
            </main>
          </Fragment>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default hot(module)(App);
