import React, { Component } from 'react'

class QuoteBox extends Component {
  state = { 
    quote: '',
    author: ''
  }

  render() {
    return (
      <main id="wrapper">
        <div id="text"></div>
        <div id="author"></div>
        <button id="new-quote">New quote</button>
        <a id="tweet-quote" href="twitter.com/intent/tweet">Tweet</a>
      </main>
    );
  }
}
 
export default QuoteBox;