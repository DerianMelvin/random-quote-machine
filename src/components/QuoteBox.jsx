import React, { Component } from "react";
import axios from "axios";

class QuoteBox extends Component {
  state = {
    quote: "",
    author: "",
  };

  componentDidMount() {
    axios.get("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json").then((res) => {
      const randomQuote = Math.floor(Math.random() * res.data.quotes.length);
      this.setState({
        quote: res.data.quotes[randomQuote].quote,
        author: res.data.quotes[randomQuote].author,
      });
    })
  }

  getNewQuote = () => {
    axios.get("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json").then((res) => {
      const randomQuote = Math.floor(Math.random() * res.data.quotes.length);
      this.setState({
        quote: res.data.quotes[randomQuote].quote,
        author: res.data.quotes[randomQuote].author,
      });
    });
  };

  render() {
    return (
      <main id="container">
        <div id="quote-box">
          <div id="container-quote">
            <h1 id="text">{'" ' + this.state.quote + ' "'}</h1>
            <h2 id="author">{'- ' + this.state.author + ' -'}</h2>
          </div>

          <div id="container-button">
            <button id="new-quote" onClick={this.getNewQuote}>
              New quote
            </button>
            <a id="tweet-quote" href="twitter.com/intent/tweet">
              Tweet
            </a>
          </div>
        </div>
      </main>
    );
  }
}

export default QuoteBox;
