import React, { Component } from "react";
import axios from "axios";

class QuoteBox extends Component {
  state = {
    quote: "",
    author: "",
  };

  componentDidMount() {
    axios.get("http://quotes.stormconsultancy.co.uk/random.json").then((res) =>
      this.setState({
        quote: res.data.quote,
        author: res.data.author,
      })
    );
  }

  getNewQuote = () => {
    axios.get("http://quotes.stormconsultancy.co.uk/random.json").then((res) =>
      this.setState({
        quote: res.data.quote,
        author: res.data.author,
      })
    );
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
