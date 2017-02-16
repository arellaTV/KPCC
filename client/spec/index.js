import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import 'isomorphic-fetch';

import jsdom from 'jsdom';
const doc = jsdom.jsdom('<!DOCTYPE html><html><body></body></html>');
global.document = doc;
global.window = doc.defaultView;

import App from './../src/App';
import SearchBar from './../src/App/SearchBar';
import ArticleEntry from './../src/App/ArticleEntry';

describe('Initial state', () => {
  it('calls componentDidMount', () => {
    sinon.spy(App.prototype, 'componentDidMount');
    const wrapper = mount(<App />);
    expect(App.prototype.componentDidMount.calledOnce).to.equal(true);
    App.prototype.componentDidMount.restore();
  });

  it('initializes state with "virgin galactic" as keyword', () => {
    const wrapper = mount(<App />);
    expect(wrapper.state('keywords')).to.equal('virgin galactic');
  });

  it('initializes state with empty array as articles', () => {
    const wrapper = mount(<App />);
    expect(wrapper.state('articles')).to.have.length(0);
  });

  it('fetches virgin galactic articles and updates state', () => {
    const wrapper = mount(<App />);
    const query = 'virgin galactic';
    return wrapper.node.getArticlesByQuery(query).then(() => {
      const updatedState = wrapper.state('articles');
      expect(updatedState).to.have.length(10);
      expect(updatedState[0].title)
        .to.equal('How aerospace is making a comeback in Southern California');
      expect(updatedState[0].byline).to.equal('Ben Bergman');
    });
  });
});

describe('Search functionality', () => {
  it('renders the Search Bar', () => {
    const wrapper = shallow(<SearchBar />);
    expect(wrapper.find('.search-bar')).to.have.length(1);
  });

  it('includes an onSubmit handler', () => {
    const props = {
      handleSubmit: () => {}
    };
    const wrapper = shallow(<SearchBar {...props} />);
    expect(wrapper.find('form').props().onSubmit).to.be.a('function');
  });

  it('calls handleSubmit on form submit event', () => {
    const props = {
      handleSubmit: sinon.spy()
    };
    const wrapper = shallow(<SearchBar {...props} />);
    wrapper.find('form').simulate('submit');
    expect(props.handleSubmit.calledOnce).to.equal(true);
  });

  it('throws error if input is blank', () => {
    const wrapper = mount(<App />);
    const eventStub = {
      preventDefault: () => {},
      target: [{ value: '' }]
    }

    return wrapper.node.handleSubmit(eventStub).catch(error => {
      expect(error).to.equal('Input not found!');
    });
  });

  it('updates state if search input is not blank', () => {
    const wrapper = mount(<App />);
    const eventStub = {
      preventDefault: () => {},
      target: [{ value: 'richard branson' }]
    }

    return wrapper.node.handleSubmit(eventStub).then(keywords => {
      const updatedState = wrapper.state();
      expect(updatedState.keywords).to.equal('richard branson');
      expect(updatedState.articles).to.have.length(10);
    });
  });

  it('updates state after entering input through DOM', () => {
    const wrapper = mount(<App />);
    wrapper.find('form').simulate('submit', { target: [{value: 'star trek'}]});
    return wrapper.node.componentDidMount().then(() => {
      expect(wrapper.state('keywords')).to.equal('star trek');
      expect(wrapper.state('articles')).to.have.length(10);
    });
  });
});
