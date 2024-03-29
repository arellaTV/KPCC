import React from 'react';
import { render } from 'react-dom';
import ArticleEntry from './ArticleEntry';
import SearchBar from './SearchBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keywords: 'virgin galactic',
      articles: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    return this.getArticlesByQuery(this.state.keywords);
  }

  componentDidUpdate() {
    const audioCollection = document.getElementsByTagName('audio');
    const audioElements = Array.prototype.slice.call(audioCollection);
    for (let i = 0; i < audioElements.length; i++) {
      audioElements[i].addEventListener('play', function() {
        audioElements.forEach((element, index) => {
          if (index !== i) { element.pause() };
        });
      });
    };
  }

  getArticlesByQuery(keywords) {
    const query = keywords.split(' ').join('+');
    return fetch(`http://www.scpr.org/api/v3/articles?query=${query}`)
      .then(response => response.json())
      .then(body => {
        this.setState({ articles: [] });
        this.setState({ articles: body.articles });
        return body.articles;
      });
  }

  handleSubmit(event) {
    event.preventDefault();
    const keywords = event.target[0].value;
    event.target[0].value = '';
    return new Promise((resolve, reject) => {
      if (keywords) {
        const articles = this.getArticlesByQuery(keywords);
        this.setState({ keywords });
        resolve(articles);
      } else {
        reject('Input not found!')
      }
    });
  }

  render() {
    return (
      <div>
        <div className='nav-bar'>
          <img src='assets/images/logo.gif' width='200px'/>
        </div>
        <SearchBar handleSubmit={this.handleSubmit} />
        <div className='container'>
          <h4>{this.state.articles.length} search results for <u>{this.state.keywords}</u></h4>
          {this.state.articles.map((article, index) => {
            return (
              <ArticleEntry
                key={index}
                article={article}
              />
            );
          })}
        </div>
      </div>
    )
  }
}

export default App;
