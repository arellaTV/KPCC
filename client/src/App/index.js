import React from 'react';
import { render } from 'react-dom';
import ArticleEntry from './ArticleEntry'

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
    this.getArticlesByQuery(this.state.keywords);
  }

  getArticlesByQuery(keywords) {
    const query = keywords.split(' ').join('+');
    fetch(`http://www.scpr.org/api/v3/articles?query=${query}`)
      .then(response => response.json())
      .then(body => {
        this.setState({ articles: body.articles })
      })
  }

  handleSubmit(event) {
    event.preventDefault();
    const keywords = event.target[0].value;
    this.setState({ keywords });
    this.getArticlesByQuery(keywords);
  }

  render() {
    return (
      <div>
        <h1>KPCC</h1>
        <h3>Search Articles</h3>
        <form onSubmit={this.handleSubmit}>
          <input type='text' />
          <input type='submit'/>
        </form>
        <h4>Search results for {this.state.keywords}</h4>
        {this.state.articles.map((article, index) => {
          return (
            <ArticleEntry
              key={index}
              article={article}
            />
          );
        })}
      </div>
    )
  }
}

export default App;
