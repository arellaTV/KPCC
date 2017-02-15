import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      articles: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getArticlesByQuery('virgin galactic');
  }

  getArticlesByQuery(query) {
    const queryStringWithPlus = query.split(' ').join('+');
    fetch(`http://www.scpr.org/api/v3/articles?query=${queryStringWithPlus}`)
      .then(response => response.json())
      .then(body => {
        this.setState({ articles: body.articles })
      })
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(event.target[0].value);
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
        <ul>
        {this.state.articles.map((article, index) => {
          return (
            <li key={index}>{article.title}</li>
          );
        })}
        </ul>
      </div>
    )
  }
}

export default App;
