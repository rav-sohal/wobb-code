import React, { Component } from 'react';
import './App.css';
import Home from './components/home/home';
import Introduction from './components/introduction/introduction';
import Navigation from './components/navigation/navigation';
import Part1 from './components/part1/part1';

import ReactPageScroller from "../node_modules/react-page-scroller";


class App extends Component {

  goToPage = (pageNumber) => {
    this.reactPageScroller.goToPage(pageNumber);
  }

  render() {
    return (
      <div className="App">
      <Navigation />
      <ReactPageScroller>
      {/*<ReactPageScroller ref={c => this.reactPageScroller = c} >*/}
      <Home />
      <Introduction />
      <Part1 />
      </ReactPageScroller>

      </div>
    );
  }
}
export default App;
