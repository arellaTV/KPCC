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

describe('<App />', () => {
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

  it('initializes state with empty array', () => {
    const wrapper = mount(<App />);
    expect(wrapper.state('articles')).to.have.length(0);
  });

  it('renders the Search Bar', () => {
    const wrapper = shallow(<SearchBar />);
    expect(wrapper.find('.search-bar')).to.have.length(1);
  });

  it('should have an onSubmit handler', () => {
    const props = {
      handleSubmit: () => {}
    };
    const wrapper = shallow(<SearchBar {...props} />);
    expect(wrapper.find('form').props().onSubmit).to.be.a('function');
  });

  it('should call handleSubmit on form submission', () => {
    const props = {
      handleSubmit: sinon.spy()
    };
    const wrapper = shallow(<SearchBar {...props} />);
    wrapper.find('form').simulate('submit');
    expect(props.handleSubmit.calledOnce).to.equal(true);
  });
});
