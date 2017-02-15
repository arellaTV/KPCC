import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      articles: []
    }
  }

  componentDidMount() {
    fetch('http://www.scpr.org/api/v3/articles?query=virgin+galactic')
      .then(response => response.json())
      .then(body => {
        this.setState({ articles: body.articles })
      })
  }

  render() {
    return (
      <div>Webpack test!!
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
