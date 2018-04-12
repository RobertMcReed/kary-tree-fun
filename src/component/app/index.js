import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from '../header';
import Footer from '../footer';
import Landing from '../landing';

import './_app.scss';

class App extends Component {
  render() {
    return (
      <div className="app" >
        <Header />
        <BrowserRouter>
          <main className="main">
            <Route exact path="/" component={Landing} />
          </main>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
