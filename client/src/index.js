import React from 'react';
import { render } from 'react-dom';
import App from './App';
import fetch from 'whatwg-fetch';
import Promise from 'promise-polyfill';

if (!window.Promise) { window.Promise = Promise };
if (!window.fetch) { window.fetch = fetch };

render(<App/>, document.getElementById('app'));
