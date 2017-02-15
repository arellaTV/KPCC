import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import jsdom from 'jsdom';
const doc = jsdom.jsdom('<!DOCTYPE html><html><body></body></html>');
global.document = doc;
global.window = doc.defaultView;

import App from './../src/App';
import SearchBar from './../src/App/SearchBar';
import ArticleEntry from './../src/App/ArticleEntry';

describe('<App />', () => {
  it ('calls componentDidMount', () => {
    sinon.spy(App.prototype, 'componentDidMount');
    const wrapper = mount(<App />);
    expect(App.prototype.componentDidMount.calledOnce).to.equal(true);
  });
});
